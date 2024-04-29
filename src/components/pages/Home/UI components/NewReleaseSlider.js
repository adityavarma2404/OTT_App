import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

let widthState;
if (window.innerWidth > 1299) {
  widthState = "XL";
} else if (window.innerWidth > 1099) {
  widthState = "L";
} else if (window.innerWidth > 799) {
  widthState = "M";
} else if (window.innerWidth > 499) {
  widthState = "S";
} else {
  widthState = "XS";
}
const sizeValues = {
  XL: 6,
  L: 5,
  M: 4,
  S: 3,
  XS: 2,
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function NewReleaseSlider(props) {
  const [tiles, setTiles] = useState(sizeValues[widthState]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: tiles,
  });
  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const posterDiv = {
    before: {
      scale: 1,
      transition: { delay: 0 },
    },
    after: {
      scale: 1.3,
      zIndex: 10,
      transition: { delay: 0.5 },
    },
    right: {
      transition: { delay: 0.5 },
      x: 50,
    },
    left: {
      transition: { delay: 0.5 },
      x: -80,
    },
  };
  const posterDesc = {
    before: {
      opacity: 0,
      y: 100,
      transition: { delay: 0 },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, stiffness: 0 },
    },
  };

  // 1299, 1099, 799, 499
  const updateBrowserWidth = () => {
    const newWidth = window.innerWidth;
    if (newWidth > 1099 && newWidth < 1299 && widthState !== "L") {
      widthState = "L";
      setTiles(5);
    } else if (newWidth <= 1099 && newWidth > 799 && widthState !== "M") {
      widthState = "M";
      setTiles(4);
    } else if (newWidth <= 799 && newWidth > 499 && widthState !== "S") {
      widthState = "S";
      setTiles(3);
    } else if (newWidth <= 499 && newWidth > 390 && widthState !== "XS") {
      widthState = "XS";
      setTiles(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateBrowserWidth);
    return () => {
      window.removeEventListener("resize", updateBrowserWidth);
    };
  }, []);

  const [elementsInView, setElementsInView] = useState([
    0,
    sizeValues[widthState] - 1,
  ]);
  const [leftScroll, setLeftScroll] = useState(false);
  const [rightScroll, setRightScroll] = useState(true);

  const logSlidesInView = useCallback(
    debounce((emblaApi) => {
      const elementsIndex = emblaApi.slidesInView();
      setElementsInView([
        elementsIndex[0],
        elementsIndex[elementsIndex.length - 1],
      ]);
      setRightScroll(emblaApi.canScrollNext());
      setLeftScroll(emblaApi.canScrollPrev());
    }, 400),
    []
  );

  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  const [movieListUpdated, setMovieListUpdates] = useState(props.movies);
  const handleWatchlist = async (data, val) => {
    let dummy = movieListUpdated[data.name];
    dummy.favourite = val;
    setMovieListUpdates({ ...movieListUpdated, dummy });
    try {
      const dataMod = {
        Poster: data.Poster,
        background: data.background,
        favourite: val,
        id: data.id,
        name: data.name,
        title: data.title,
      };
      const response = await axios.put(
        `https://ott-movies-data-default-rtdb.firebaseio.com/movies-list/newReleaseTop12/${data.name}.json`,
        dataMod
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div className="embla">
      <motion.div
        whileHover={{ overflow: "visible" }}
        className="embla__viewport"
        ref={emblaRef}
      >
        <motion.div className="embla__container">
          {Object.values(movieListUpdated).map((each, index) => {
            let whileHoverVariants = ["after"];
            if (index === elementsInView[0]) {
              whileHoverVariants.push("right");
            }
            if (index === elementsInView[1]) {
              whileHoverVariants.push("left");
            }

            return (
              <motion.div
                variants={posterDiv}
                initial="before"
                whileHover={whileHoverVariants}
                key={index}
                className="embla__slide"
              >
                <Link to={`moviepage/${each.name}`}>
                  <img
                    alt="MoviePoster"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="high"
                    src={each.Poster}
                    className="posterImg"
                  />
                </Link>
                <motion.div variants={posterDesc} className="description">
                  <div className="description_buttons">
                    <Link to={`moviepage/${each.name}`}>
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
                    </Link>
                    {each.favourite ? (
                      <motion.button
                        key="listed"
                        onClick={() => handleWatchlist(each, false)}
                        initial={{ opacity: 0.3, scale: 0.9 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="myListButton"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-check2 watchListSvg me-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg>
                        Listed
                      </motion.button>
                    ) : (
                      <motion.button
                        key="watchlist"
                        onClick={() => handleWatchlist(each, true)}
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
                        Watchlist
                      </motion.button>
                    )}
                  </div>
                  <div className="DetailsListContainer">
                    <ul className="DetailsList mt-2">
                      <li>2022</li>
                      <li>Telugu</li>
                      <li>2h 16min</li>
                      <li>U/A</li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.button
        className="embla__prev"
        disabled={!leftScroll}
        animate={{ opacity: !leftScroll ? 0.2 : 1 }}
        onClick={scrollPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </motion.button>
      <motion.button
        className="embla__next"
        disabled={!rightScroll}
        animate={{ opacity: rightScroll ? 1 : 0.2 }}
        onClick={scrollNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}

export default React.memo(NewReleaseSlider);
