import React, { useRef, useState } from "react";
import "../../../css/NavBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  const menuToggleRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    menuToggleRef.current.classList.toggle("active");
  };

  const textVariants = {
    visible: { y: 0, transition: { type: "tween", delay: 0.2 } },
    hidden: { y: "-100vh" },
  };
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const sublistVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  console.log("NavBar.js");
  return (
    <>
      <div className="sideBarContainer">
        <div className="navigation">
          <motion.button
            ref={menuToggleRef}
            onClick={handleClick}
            className="menuToggle"
            id="navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ y: "-100vh" }}
        variants={textVariants}
        animate={isVisible ? "visible" : "hidden"}
        className="NavBar_menu_container"
      >
        <motion.ul variants={listVariants} className="NavBar_menu_ul">
          <motion.li variants={sublistVariants} whileHover={{scale: 1.2,fontFamily: "BerkshireSwash"}} onClick={handleClick}>
            <Link className="NavBar_link" to="">
              Home
            </Link>
          </motion.li>
          <motion.li variants={sublistVariants} whileHover={{scale: 1.2,fontFamily: "BerkshireSwash"}} onClick={handleClick}>
            <Link className="NavBar_link" to="movies">
              Movies
            </Link>
          </motion.li>
          <motion.li variants={sublistVariants} whileHover={{scale: 1.2,fontFamily: "BerkshireSwash"}} onClick={handleClick}>
            <Link className="NavBar_link" to="tvshows">
              TV Shows
            </Link>
          </motion.li>
          <motion.li variants={sublistVariants} whileHover={{scale: 1.2,fontFamily: "BerkshireSwash"}} onClick={handleClick}>
            <Link className="NavBar_link" to="myList">
              My List
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
}

export default React.memo(NavBar);
