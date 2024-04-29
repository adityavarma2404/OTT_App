import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import React from "react";
import Login from "./components/pages/Login/Login";
import ForgotPassword from "./components/pages/Login/ForgotPassword";
import "./App.css";
import Profile from "./components/pages/Home/Profile";
import NotFound from "./components/pages/Home/NotFound";
import SomethingWrong from "./components/pages/Home/SomethingWrong";
import { fetchNewReleaseMoviedata } from "./components/pages/Home/MoviePage";
import { fetchMoviedata as moviesList } from "./components/pages/Home/Home";
import { fetchAllMoviesFromCategory } from "./components/pages/Home/ListOfMovies";
import { lazy, Suspense } from "react";
import Transition from "./components/pages/Home/Transition";
import { AuthProvider } from "./components/context/AuthContext";
import PrivateRoute from "./components/pages/Login/PrivateRoute";
import { PrivateLoginRoute } from "./components/pages/Login/PrivateRoute";
import Search from "./components/pages/Home/Search";

const Home = lazy(() => import("./components/pages/Home/Home"));
const ListOfMovies = lazy(() => import("./components/pages/Home/ListOfMovies"));
const TVshow = lazy(() => import("./components/pages/Home/TVshowPage"));
const MoviePage = lazy(() => import("./components/pages/Home/MoviePage"));

const loginRouter = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PrivateLoginRoute>
        <Login />
      </PrivateLoginRoute>
    ),
  },
  {
    path: "/forgotPassword",
    element: (
      <PrivateLoginRoute>
        <ForgotPassword />
      </PrivateLoginRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <Transition>
        <Profile />
      </Transition>
    ),
    errorElement: <SomethingWrong />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Suspense fallback="loading">
              <Home />
            </Suspense>
          </PrivateRoute>
        ),
        loader: moviesList,
        errorElement: <NotFound />,
      },{
        path: "search",
        element: <Search />
      },
      {
        path: ":category",
        loader: fetchAllMoviesFromCategory,
        element: (
          <Suspense fallback="loading">
            <ListOfMovies />
          </Suspense>
        ),
      },
      {
        path: "tvshows",
        element: (
          <Suspense fallback="loading">
            <TVshow />
          </Suspense>
        ),
      },
      {
        path: "moviepage/:movieName",
        loader: fetchNewReleaseMoviedata,
        errorElement: <NotFound />,
        element: (
          <Suspense fallback="loading">
            <MoviePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home/*",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home/moviepage",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home/moviepage/*",
    element: <Navigate to="/home" replace />,
  },
]);
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={loginRouter} />
    </AuthProvider>
  );
}

export default React.memo(App);
