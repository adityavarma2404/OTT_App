import React from "react";
import Profile from "./Profile";

function NotFound() {
  return (
    <>
    <Profile />
    <div className="pageNotFoundContainer">
      <p className="pageNotFoundHeading">404 - PAGE NOT FOUND</p>
    </div>
    </>
  );
}

export default React.memo(NotFound);
