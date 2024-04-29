import React from "react";
import "../../../css/home.css";
import "../../../css/mediaQuery.css";
import CarouselBanner from "./CarouselBanner";
import NewRelease from "./categories/NewRelease";
import ActionAndAdventure from "./categories/ActionAndAdventure";
import BrowsebyLanguage from "./categories/BrowseByLanguage";
import Comedy from "./categories/Comedy";
import Romantic from "./categories/Romantic";
import SciFi from "./categories/SciFi";
import Animation from "./categories/Animation";
import Anime from "./categories/Anime";
import Horror from "./categories/Horror";
import Mystery from "./categories/Mystery";
import Footer from "./Footer";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function Home() {
  const data = useLoaderData();
  const driverObj = driver({
    popoverClass: "driverjs-theme",
    showProgress: true,
    steps: [
      {
        popover: {
          title: "Welcome",
          description: "Lets have a quick tour.",
        },
      },
      {
        element: "#profileSearch",
        popover: {
          title: "Search",
          description:
            "You will be able to search for movies/TV shows, surrently not implemented.",
        },
      },
      {
        element: "#profileNoti",
        popover: {
          title: "Notifications",
          description: "You will receive respctive notifications here.",
        },
      },
      {
        element: "#profileAcc",
        popover: {
          title: "Account",
          description: "You will be able to signout from here.",
        },
      },
      {
        element: "#navigation",
        popover: {
          title: "Menu",
          description: "You can select the choices as per your interest.",
        },
      },
      {
        element: "#newRelease",
        popover: {
          title: "New Release section",
          description:
            "This is the section which is fully functional where you can add your favourite movies, You can open the movie page. 'see more' feature is available for other categories as well.",
          side: "top",
        },
      },
    ],
  });

  if (!localStorage.getItem("tourCompleted")) {
    driverObj.drive();
    localStorage.setItem("tourCompleted", "true");
  }
  return (
    <>
      <CarouselBanner />
      <NewRelease data={data.newReleaseTop12} />
      <ActionAndAdventure data={data.actionAndAdventureTop12} />
      <div className="dialogueBox">
        <p className="dialogue">
          {" "}
          Yuddhamlo Gelavadam Ante Satruvuni Odinchadam, Champadam Kaadu – Jalsa
        </p>
      </div>
      <br />
      <Comedy data={data.comedyTop12} />
      <BrowsebyLanguage />
      <br />
      <div className="dialogueBox">
        <p className="dialogue">
          {" "}
          Naa Saavu Nenu Sasta Neekenduku – Pelli Choopulu
        </p>
      </div>
      <br />
      <Romantic data={data.romanticTop12} />
      <SciFi data={data.scifiTop12} />
      <div className="dialogueBox">
        <p className="dialogue">
          {" "}
          Flute Jinka Mundu Oodu Simham Mundu Kaadu – Legend
        </p>
      </div>
      <br />
      <Animation data={data.animationTop12} />
      <br />
      <br />
      <Anime data={data.animeTop12} />
      <div className="dialogueBox">
        <p className="dialogue">
          {" "}
          Prapanchamlo Tallini Minchina Yodhulu Ee Prapanchamlo Evaru Leru – KGF
        </p>
      </div>
      <br />
      <Horror data={data.horrorTop12} />
      <Mystery data={data.mysteryTop12} />
      <Footer />
    </>
  );
}

export default React.memo(Home);

export const fetchMoviedata = async () => {
  try {
    const response = await axios.get(
      "https://ott-movies-data-default-rtdb.firebaseio.com/movies-list.json"
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
