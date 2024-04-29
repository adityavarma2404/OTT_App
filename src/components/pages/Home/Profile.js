import React, { useState } from "react";
import "../../../css/profile.css";
import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigate,
} from "react-router-dom";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfiOpen, setIsProfiOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const notiVarient = {
    after: {
      opacity: 1,
      visibility: "visible",
      y: 0,
    },
  };
  const accVarient = {
    after: {
      opacity: 1,
      visibility: "visible",
      x: 0,
    },
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch {
      console.log("Failed to Log out");
    }
  };
  console.log("Profile.js");
  return (
    <>
      <NavBar />
      <div className="profileBarContainer">
        <Link to="">
          <div className="profileLogo"></div>
        </Link>
        <div className="profileContainer">
          <Link to='search' id="profileSearch" className="profileSearch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </Link>
          <motion.button
            variants={notiVarient}
            id="profileNoti"
            animate={isNotifOpen ? "after" : "before"}
            onClick={() => {
              setIsNotifOpen(!isNotifOpen);
              setIsProfiOpen(false);
            }}
            className="profileNotifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
            <motion.div
              initial={{ y: 50 }}
              variants={notiVarient}
              className="profileNotificationBox pt-3"
            >
              <div className="profileNotificationBoxSubDiv">
                <div className="pt-2">
                  <p>notification 1</p>
                  <hr />
                  <p>notification 2</p>
                  <hr />
                  <p>notification 3</p>
                  <hr />
                  <p>notification 4</p>
                  <hr />
                  <p>notification 5</p>
                  <hr />
                  <p>notification 6</p>
                  <hr />
                  <p>notification 1</p>
                  <hr />
                  <p>notification 2</p>
                  <hr />
                  <p>notification 3</p>
                  <hr />
                  <p>notification 4</p>
                  <hr />
                  <p>notification 5</p>
                  <hr />
                  <p>notification 6</p>
                </div>
              </div>
            </motion.div>
          </motion.button>
          <motion.button
            id="profileAcc"
            variants={accVarient}
            animate={isProfiOpen ? "after" : "before"}
            onClick={() => {
              setIsProfiOpen(!isProfiOpen);
              setIsNotifOpen(false);
            }}
            className="profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <motion.div
              initial={{ x: 50, opacity: 0, visibility: "hidden" }}
              variants={accVarient}
              className="profileBox pt-3"
            >
              <div className="profileBoxSubDiv">
                <div className="pt-2">
                  <p>Manage profile</p>
                  <hr />
                  <p>Account settngs</p>
                  <hr />
                  <p>Help</p>
                  <hr />
                  <p onClick={handleLogout}>Signout</p>
                </div>
              </div>
            </motion.div>
          </motion.button>
        </div>
      </div>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export default React.memo(Profile);
