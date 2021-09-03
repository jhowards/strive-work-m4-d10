import React from "react";
import AlbumList from "./AlbumList";

const Homepage = () => {
  return (
    <div className="container-fluid mainbody px-0">
      <div className="stickynav">
        <div className="navcontent">
          <div className="arrows">
            <div className="circle mr-3">
              <div className="arrow left"></div>
            </div>
            <div className="circle">
              <div className="arrow right"></div>
            </div>
          </div>

          <div className="useraccount d-none d-lg-block mr-5">
            <span className="persontext">User Name</span>
          </div>
        </div>
      </div>

      <div className="container-fluid bodycontent pl-4">
        <p className="morningtext mt-5">Good morning</p>

        <AlbumList />
      </div>
      <div className="container-fluid mt-5">
        <section>
          <div className=" d-flex align-items-center justify-content-between">
            <h5 className="font-weight-bold text-white ">Recently played</h5>
            <small className="text-white font-weight-bold text-muted">
              SEE ALL
            </small>
          </div>

          <div className="row row-cols-lg-auto text-white mt-3">
            <div className="col mb-4">
              <a href="/albumpage.html" className="custom-card">
                <div className="card p-2 bg-customdark">
                  <img
                    id="madonnaImage"
                    src="/Bohemian_Rhapsody_album.jpg"
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body section2body">
                    <span className="card-title" id="madonnaTitle">
                      Bohemian Rhapsody
                    </span>
                    <p className="card-text"></p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
