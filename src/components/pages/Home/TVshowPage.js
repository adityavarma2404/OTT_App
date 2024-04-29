import React from "react";
import movies from "../../json/movies.json";
import Footer from "./Footer";

function TVshow() {
  const tvShows = movies.tvshows;
  console.log("TVshow.js");
  return (
    <>
      <div
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-pause="hover"
            data-bs-interval="5000"
          >
            <div className="carouselImageContainer">
              <div className="carouselImageDescription tvShowImageDesc">
                <div className="carouselImageRank">
                  <h3>#1 in India</h3>
                </div>
                <div className="tvShowImageTitleContainer">
                  <img
                    className="tvShowImageTitle"
                    src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/7032/1607032-t-73a2c8df16e9"
                  />
                </div>
                <br />
                <h6>New Series</h6>
                <br />
                <div className="carouselImageInfo tvShowBannerButtonscontainer ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-play-circle tvShowPlay me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                    </svg>
                    Play S01E01
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-info-circle tvShowInfo me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    More info
                  </div>
                </div>
              </div>
              <div className="tvShowImageContainer">
                <img
                  className="tvShowImage"
                  src="https://www.xtrafondos.com/wallpapers/resoluciones/21/loki-tom-hiddleston-serie-loki_2560x1440_8051.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carouselImageContainer">
              <div className="carouselImageDescription tvShowImageDesc">
                <div className="carouselImageRank">
                  <h3>#2 in India</h3>
                </div>
                <div className="tvShowImageTitleContainer mb-3">
                  <img
                    className="tvShowImageTitle"
                    src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaj_P10RHKdBmsfvYClXh1RVOuOQPVxQq4EFXj3gePdrJp9TiuDFEbF_BhSJKW5bIRiwMcKmeYpGSGxpcwhZzgtpTgxQIHsPDdEDYNYtwlc.webp?r=8d5"
                  />
                </div>

                <h6>New Series</h6>
                <br />
                <div className="carouselImageInfo tvShowBannerButtonscontainer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-play-circle tvShowPlay me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                    </svg>
                    Play S01E01
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-info-circle tvShowInfo me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    More info
                  </div>
                </div>
              </div>
              <div className="tvShowImageContainer">
                <img
                  className="tvShowImage"
                  src="https://wallpapercave.com/wp/wp8771727.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carouselImageContainer">
              <div className="carouselImageDescription tvShowImageDesc">
                <div className="carouselImageRank">
                  <h3>#3 in India</h3>
                </div>
                <div className="tvShowImageTitleContainer">
                  <img
                    className="tvShowImageTitle"
                    src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABajpdrycy5d7g0_rVXXQFshLftrpWv3UfxKy_xbxeeHO0Uw8LTaUz6nB6NfgssvXKis39S2NPz17DPiVKdKAcj98uoYf1-NALFxSy7iaPMM.webp?r=584"
                  />
                </div>
                <br />
                <h6>New Series</h6>
                <br />
                <div className="carouselImageInfo tvShowBannerButtonscontainer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-play-circle tvShowPlay me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                    </svg>
                    Play S01E01
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-info-circle tvShowInfo me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    More info
                  </div>
                </div>
              </div>
              <div className="tvShowImageContainer">
                <img
                  className="tvShowImage"
                  src="http://getwallpapers.com/wallpaper/full/2/c/a/1017775-large-friends-tv-show-wallpapers-1920x1080-full-hd.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carouselImageContainer">
              <div className="tvShowImageDesc">
                <div className="carouselImageRank">
                  <h3>#4 in India</h3>
                </div>
                <div className="tvShowImageTitleContainer tvShowImageTitleContainer4">
                  <img
                    className="tvShowImageTitle"
                    src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/7520/1417520-t-4197a648dfff"
                  />
                </div>
                <br />
                <h6>New Series</h6>
                <br />
                <div className="carouselImageInfo tvShowBannerButtonscontainer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-play-circle tvShowPlay me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                    </svg>
                    Play S01E01
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-info-circle tvShowInfo me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    More info
                  </div>
                </div>
              </div>
              <div className="tvShowImageContainer ">
                <img
                  className="tvShowImage tvShowImage4"
                  src="https://wallpaperaccess.com/full/9330071.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* ---------------------------------------------------------------------list------------------------------------------------------- */}
      <div className="moviesListContainer tvShowLisContainer">
        <h1 className="">TV Shows</h1>
        <div className="moviesListsubContainer">
          <div className="mt-5 d-flex justify-content-evenly flex-wrap mb-5">
            <button className="filterButton">Action</button>
            <button className="filterButton">Adventure</button>
            <button className="filterButton">Romantic</button>
            <button className="filterButton">Comedy</button>
            <button className="filterButton">sci-fi</button>
            <button className="filterButton">Horror</button>
            <button className="filterButton">Thriller</button>
          </div>

          <div className="moviesList">
            {tvShows.map((each, index) => {
              return (
                <div key={index} className="newReleaseHover me-3 mb-5">
                  <img
                    loading="lazy"
                    decoding="async"
                    fetchpriority="high"
                    className="newReleasePoster moviesListPoster"
                    src={each}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default React.memo(TVshow);
