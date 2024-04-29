import React from "react";
import baahubail from "../../../asserts/baahubali.png";
import KGF from "../../../asserts/KGF.png";
import RRR from "../../../asserts/RRR.png";
import { motion } from "framer-motion";

function CarouselBanner() {
  const titleVarient = {
    before: {
      opacity: 0,
      y: 50,
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  const childVarient = {
    before: {
      opacity: 0,
      y: 50,
    },
    after: {
      opacity: 1,
      y: 0,
    },
  };
  const childDelayVarient = {
    before: {
      opacity: 0,
      y: 50,
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
      },
    },
  };

  const movieButtons = () => {
    return (
      <motion.div variants={childDelayVarient} className="carouselImageInfo ">
        <div>
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
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-info-circle me-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
          More info
        </div>
      </motion.div>
    );
  };

  console.log("CarouselBanner.js");
  return (
    <motion.div
      id="carouselExampleIndicators"
      className="carousel slide customCarousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        {/* banner 1 */}
        <div
          className="carousel-item active"
          data-bs-pause="hover"
          data-bs-interval="5000"
        >
          <div className="carouselImageContainer">
            <motion.div
              variants={titleVarient}
              initial="before"
              whileInView="after"
              className="carouselImageDescription"
            >
              <motion.div variants={childVarient} className="carouselImageRank">
                <h3>#1 in India</h3>
              </motion.div>
              <motion.img
                alt="title"
                variants={childVarient}
                src={baahubail}
                className="carouselImageTitle"
              />
              <br />
              <motion.h6 variants={childVarient}>
                Telugu | Hindi | Tamil | Kanada | Malayalam
              </motion.h6>
              <br />
              {movieButtons()}
            </motion.div>
            <div className="carouselImage1"></div>
          </div>
        </div>
        {/* banner 2  */}
        <div className="carousel-item" data-bs-interval="5000">
          <div className="carouselImageContainer">
            <motion.div
              variants={titleVarient}
              initial="before"
              whileInView="after"
              className="carouselImageDescription"
            >
              <motion.div variants={childVarient} className="carouselImageRank">
                <h3>#2 in India</h3>
              </motion.div>
              <motion.img
                alt="title"
                src={KGF}
                variants={childVarient}
                className="carouselImageTitle mb-4"
              />
              <motion.h6 variants={childVarient}>
                Telugu | Hindi | Tamil | Kanada | Malayalam
              </motion.h6>
              <br />
              {movieButtons()}
            </motion.div>
            <div className="carouselImage1 carouselImage2"></div>
          </div>
        </div>
        {/* banner 3  */}
        <div className="carousel-item" data-bs-interval="5000">
          <div className="carouselImageContainer">
            <motion.div
              variants={titleVarient}
              initial="before"
              whileInView="after"
              className="carouselImageDescription"
            >
              <motion.div variants={childVarient} className="carouselImageRank">
                <h3>#3 in India</h3>
              </motion.div>
              <motion.img
                alt="title"
                variants={childVarient}
                src={RRR}
                className="carouselImageTitle"
              />
              <br />
              <motion.h6 variants={childVarient}>
                Telugu | Hindi | Tamil | Kanada | Malayalam
              </motion.h6>
              <br />
              {movieButtons()}
            </motion.div>
            <div className="carouselImage1 carouselImage3"></div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </motion.div>
  );
}

export default React.memo(CarouselBanner);
