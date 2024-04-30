import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function MoviePage() {
  const castList = [
    "Actor",
    "Actor",
    "Actor",
    "Director",
    "Producer",
    "Writer",
    "Music",
    "Cinematography",
    "Editor",
  ];
  const descAnim = {
    "before":{
      scale: 0.7,
      opacity:0,
      y:50
    },
    "after":{
      scale:1,
      opacity:1,
      y:0,
      transition:{
        delay:1.5,
        delayChildren: 1.6,
        staggerChildren: 0.1
      }
    }
  }
  const descChildAnim = {
    "before":{
      scale: 1,
      opacity:0,
      y:50
    },
    "after":{
      scale:0.9,
      opacity:1,
      y:0
    }
  }
  const fetcedData = useLoaderData();
  return (
    <motion.div>
      <div className="movieBackgroundContainer">
        <img
          alt="Poster"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
          className="movieBackground"
          src={fetcedData.background}
        />

        <div className="moviePageDetails">
          <motion.div variants={descAnim} initial="before" animate="after">
            <motion.img
              alt="title"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
              src={fetcedData.title}
            />
            <motion.div variants={descChildAnim} className="newReleaseDetailsListContainer moviePageDetailsShortDescription">
              <ul className="newReleaseDetailsList">
                <li>2022</li>
                <li>Telugu</li>
                <li>2h 16min</li>
                <li>U/A</li>
              </ul>
            </motion.div>
            <motion.p variants={descChildAnim} className="newReleasedescription moviePageDetailsDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              diam justo. In hac Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed nec diam justo. In hac
            </motion.p>
            <motion.div variants={descChildAnim} className="moviePageButtonsContainer">
              <button className="playButton moviePageButtonsPlay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  fill="currentColor"
                  className="bi bi-play-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                Play
              </button>
              {fetcedData.favourite ? (
                <button className="myListButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-check2 me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                  Listed
                </button>
              ) : (
                <button className="myListButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-plus-lg me-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                  Watchlist
                </button>
              )}
            </motion.div>
          </motion.div>
        </div>
        <div className="moviePageCastContainer">
          <h3>Cast & Crew</h3>
          <div className="moviePageCastSubContainer">
            {castList.map((each, index) => {
              return (
                <div key={index} className="moviePageCast">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-person-circle moviePageSvg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>

                  <p>{each}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default React.memo(MoviePage);

export async function fetchNewReleaseMoviedata({ request, params }) {
  const name = params.movieName;
  try {
    const response = await axios.get(
      `https://ott-movies-data-default-rtdb.firebaseio.com/movies-list/newReleaseTop12/${name}.json`
    );
    const data = response.data;
    if (data === null) {
      throw new Error("Invalid URL path");
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
