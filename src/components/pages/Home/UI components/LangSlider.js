import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

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
  XL: 5,
  L: 4,
  M: 3,
  S: 2,
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

function LangSlider(props) {
  const [tiles, setTiles] = useState(sizeValues[widthState]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: tiles,
  });

  const slides = props.movies;
  const scrollPrev = useCallback(() => {
    console.log("scroll prev");
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    console.log("scroll  next");
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

  const updateBrowserWidth = () => {
    const newWidth = window.innerWidth;
    if (newWidth > 1099 && newWidth < 1299 && widthState !== "L") {
      widthState = "L";
      setTiles(4);
      console.log("state updated to 5");
    } else if (newWidth <= 1099 && newWidth > 799 && widthState !== "M") {
      widthState = "M";
      setTiles(3);
      console.log("state updated to 4");
    } else if (newWidth <= 799 && newWidth > 499 && widthState !== "S") {
      widthState = "S";
      setTiles(2);
      console.log("state updated to 3");
    } else if (newWidth <= 499 && newWidth > 390 && widthState !== "XS") {
      widthState = "XS";
      setTiles(2);
      console.log("state updated to 2");
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

  console.log("LangSlider.j")
  return (
      <motion.div className="embla">
        <motion.div
          whileHover={{ overflow: "visible" }}
          className="embla__viewport"
          ref={emblaRef}
        >
          <motion.div className="embla__container">
            {slides.map((each, index) => {
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
                  <motion.img src={each} 
                  loading="lazy" 
                  decoding="async" fetchpriority="high" alt="filter lang" className="posterImg" />
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

export default React.memo(LangSlider);
