import React from "react";
import Footer from "./Footer";
import { useParams, useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const posterDiv = {
  before: {
    scale: 1,
    transition: { delay: 0 },
  },
  after: {
    scale: 1.2,
    zIndex: 10,
    transition: { delay: 0.5 },
  },
};
const posterDesc = {
  before: {
    opacity: 0,
    visibility: "hidden",
    y: 50,
    transition: { delay: 0 },
  },
  after: {
    visibility: "visible",
    opacity: 1,
    y: 0,
    transition: { delay: 1, stiffness: 0 },
  },
};

function ListOfMovies() {
  const title = useParams().category;
  let allMoviesCategory = useLoaderData();

  const headings = {
    actionAndAdventure: {
      title: "Action",
      quote:
        "Explosions? Check. Swashbuckling? Check. Dodging boulders and outsmarting dragons? Buckle up, buttercup, it's gonna be a wild ride!",
    },
    comedy: {
      title: "Comedy",
      quote:
        "Prepare to snort laugh, chortle, and maybe even guffaw. This movie's funnier than a mime convention dressed as clowns.",
    },
    romance: {
      title: "Romance",
      quote:
        "Tissues for your tears, butterflies for your heart, and enough awkward teenage stares to fill a prom night. Get ready for the feels, folks!",
    },
    horror: {
      title: "Horror",
      quote:
        "Sleep is overrated anyway, right? Grab a blanket to hide behind and pray there's no popcorn stuck in your teeth when you scream.",
    },
    scifi: {
      title: "Sci-Fi",
      quote:
        "Blast off to galaxies far, far away, where the laws of physics are just suggestions and spaceships smell suspiciously like freshly baked baguettes.",
    },
    anime: {
      title: "Anime",
      quote:
        "Giant robots, cat girls, and epic battles that make Dragon Ball Z look like a pillow fight. Brace yourself for a technicolor explosion of pure, unadulterated awesome.",
    },
    mysteryAndThriller: {
      title: "Mystery",
      quote: "When reality itself becomes a mystery",
    },
    myList: {
      title: "Favourits",
      quote: "Your List",
    },
    newRelease: {
      title: "New Release",
      quote: "Hope you like them!",
    },
    movies: {
      title: "Movies",
      quote: "Hope you like them!",
    },
  };

  const handleMovieDisplay = (each, index) => {
    return (
      <motion.div
        variants={posterDiv}
        initial="before"
        whileHover="after"
        key={index}
        className="newReleaseHover me-3 mb-5"
      >
        <img
          loading="lazy"
          decoding="async"
          fetchpriority="high"
          className="newReleasePoster moviesListPoster"
          src={title === "myList" ? each.Poster : each}
          alt="movie poster"
        />
        <motion.div variants={posterDesc} className="description">
          <div className="description_buttons">
            <motion.button
              initial={{ opacity: 0.3, scale: 0.9 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="myListButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-play-circle playSvg me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
              </svg>
              Play
            </motion.button>
            <motion.button
              initial={{ opacity: 0.3, scale: 0.9 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="myListButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-plus-lg watchListSvg me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
              Watch list
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            className="DetailsListContainer"
          >
            <ul className="DetailsList mt-2">
              <li>2022</li>
              <li>Telugu</li>
              <li>2h 16min</li>
              <li>U/A</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  if (title === "movies") {
    let filterMovies = [];
    const filter = [
      "actionAndAdventure",
      "anime",
      "comedy",
      "horror",
      "mysteryAndThriller",
      "romance",
      "scifi",
    ];
    filter.forEach((each) => {
      const a = allMoviesCategory[each].slice(0, 30);
      filterMovies.push(...a);
    });
    allMoviesCategory = filterMovies;
  }
  console.log("ListOfMovies.js");
  return (
    <>
      <div className="moviesListContainer">
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genres{"   "}
          </button>
          <ul className="dropdown-menu">
            <Link className="dropdown-item" to="/home/actionAndAdventure">
              <li>Action</li>
            </Link>
            <Link className="dropdown-item" to="/home/scifi">
              <li>Sci-Fi</li>
            </Link>
            <Link className="dropdown-item" to="/home/comedy">
              <li>Comedy</li>
            </Link>
            <Link className="dropdown-item" to="/home/horror">
              <li>Horror</li>
            </Link>
            <Link className="dropdown-item" to="/home/anime">
              <li>Anime</li>
            </Link>
            <Link className="dropdown-item" to="/home/romance">
              <li>Romance</li>
            </Link>
            <Link className="dropdown-item" to="/home/mysteryAndThriller">
              <li>Mystery</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="moviesListsubContainer">
        <span className="moviesListHeading">{headings[title].title}</span>
        <div className="moviesListSubHeadingContainer">
          <span className="moviesListSubHeading">
            {" "}
            {headings[title].quote}{" "}
          </span>
        </div>
        <div className="moviesList">
          {title === "myList"
            ? Object.values(allMoviesCategory).map((each, index) => {
                if (each.favourite) {
                  return handleMovieDisplay(each, index);
                }
              })
            : allMoviesCategory.map((each, index) => {
                return handleMovieDisplay(each, index);
              })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default React.memo(ListOfMovies);

export async function fetchAllMoviesFromCategory({ request, params }) {
  console.log("#fetch from ListOfMovies.js");
  let name = params.category;
  let url = "";
  if (name === "newRelease") {
    name = "romance";
  }
  if (name === "myList") {
    name = "newReleaseTop12";
  }
  if (name === "movies") {
    url = `https://ott-movies-data-default-rtdb.firebaseio.com/movies-list.json`;
  } else {
    url = `https://ott-movies-data-default-rtdb.firebaseio.com/movies-list/${name}.json`;
  }
  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data == null) {
      throw new Error("Invalid URL path");
    }
    return data;
  } catch (error) {
    console.error("this is error", error);
  }
}
