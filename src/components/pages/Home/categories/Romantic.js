import React from "react";
import { Link } from "react-router-dom";
import MovieSlider from "../UI components/MovieSlider";


function Romantic({data}) {
  console.log("Romantic.js")
  return (
    <div className="newReleaseContainer">
      <div className="newReleaseHeading d-flex justify-content-between align-items-center">
        <h3 className="">Romantic</h3>

        <Link className="seeMoreText" to="romance">
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
          </Link>
      
      </div>
      <MovieSlider movies={data} />
    </div>
  );
}

export default React.memo(Romantic);
