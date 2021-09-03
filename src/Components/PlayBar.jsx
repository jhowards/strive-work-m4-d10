import React from "react";

const PlayBar = () => {
  return (
    <section className="music-controls container-fluid justify-content-center">
      <div className="row music-controls-row justify-content-center;">
        <div className="col col-lg-1 m-controls_album-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKTAXHEgak92e3DVFrGplVV23I2KRShQInV3WBRU&usqp=CAE&s"
            alt="album image"
          ></img>
        </div>
        <div className="col col-lg-1 m-controls_album-artist_title">
          <h6>Holding On</h6>
          <p className="footerp">Technimatic</p>
        </div>
        <div class="col col-lg-1 m-controls_like">
          <i class="bi bi-heart"></i>
          <i class="bi bi-bounding-box-circles"></i>
        </div>
        <div class="col col-lg-5 music-controls_controls">
          <div class="m-controls_controls">
            <ul class="d-flex">
              <li class="footerli">
                <i class="bi bi-shuffle"></i>
              </li>
              <li class="footerli">
                <i class="bi bi-skip-start-fill"></i>
              </li>

              <li id="play" class="grow footerli">
                <div class="play_triangle"></div>
              </li>
              <li class="footerli">
                <i class="bi bi-skip-end-fill"></i>
              </li>

              <li class="footerli"></li>
              <li class="footerli">
                <i class="bi bi-arrow-repeat"></i>
              </li>
            </ul>
          </div>
          <div class="m-controls_duration">
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayBar;
