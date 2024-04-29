import React, { useRef } from "react";
import { motion } from "framer-motion";

function Animation({ data }) {

  const scrollContainerRef = useRef(null);
  const leftScrollButtonRef = useRef(null);
  const rightScrollButtonRef = useRef(null);
  const posterRef = useRef(null);

  const handleScrollDirection = (direction) => {
    if (scrollContainerRef.current) {
      let calculatedWidth = Math.floor(
        scrollContainerRef.current.clientWidth / (posterRef.current.width + 15)
      );
      if (direction === "left") {
        scrollContainerRef.current.scrollLeft -=
          calculatedWidth * (posterRef.current.width + 15);
      } else if (direction === "right") {
        scrollContainerRef.current.scrollLeft +=
          calculatedWidth * (posterRef.current.width + 15);
      }
    }
  };

  const handleScroll = () => {
    const scrollcontainerref = scrollContainerRef.current;
    if (scrollcontainerref.scrollLeft !== 0) {
      leftScrollButtonRef.current.classList.remove("hidden");
    } else {
      leftScrollButtonRef.current.classList.add("hidden");
    }

    if (
      scrollcontainerref.scrollLeft ===
      scrollcontainerref.scrollWidth - scrollcontainerref.clientWidth
    ) {
      rightScrollButtonRef.current.classList.add("hidden");
    } else {
      rightScrollButtonRef.current.classList.remove("hidden");
    }
  };
  return (
    <motion.div className="newReleaseContainer">
      <div className="newReleaseHeading d-flex justify-content-between align-items-center">
        <h3 className="">Animation</h3>
        <a href="">
          See more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
      </div>
      <motion.div
        ref={scrollContainerRef}
        onScroll={() => handleScroll()}
        className="animationMovieContainer"
      >
        <motion.div className="newReleaseSub">
          {data.map((each, index) => {
            return (
              <motion.div key={index} className="image-container">
                <motion.img
                  ref={posterRef}
                  loading="lazy"
                  decoding="async"
                  fetchpriority="high"
                  src={each}
                  alt="Animation movie"
                />
                
                <div className="animationMovieDescriptionContainer">
                  <div className="animationMovieDescription1">
                    <button className="playButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-play-circle me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                      </svg>
                      Play
                    </button>
                    <button className="myListButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
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
                  </div>
                  <div className="horizontalRow"></div>

                  <div className="animationMovieDescription2">
                    <ul className="">
                      <li>2022</li>
                      <li>Telugu</li>
                      <li>2h 16min</li>
                    </ul>
                    <ul className="">
                      <li>
                        U/A{" "}
                        <span className="newReleaseDetailsListCertificate">
                          13+
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className="animationMovieDescription3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    nec diam justo. In hac Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed nec diam justo. In hac
                  </p>
                </div>
              </motion.div>
            );
          })}
          <button
            ref={leftScrollButtonRef}
            className="scrollButtons hidden scrollButtonsLeft animationScrollButtons animationScrollButtonsTop"
            onClick={() => handleScrollDirection("left")}
          >
            <div>
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
            </div>
          </button>
          <button
            ref={rightScrollButtonRef}
            className="scrollButtons scrollButtonsRight animationScrollButtons animationScrollButtonsTop"
            onClick={() => handleScrollDirection("right")}
          >
            <div>
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
            </div>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default React.memo(Animation);
