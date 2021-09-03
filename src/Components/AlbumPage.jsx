import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";

function AlbumPage() {
  const [albumDetails, setAlbumDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/album/" + id
        );
        if (response.ok) {
          console.log("response ok!");
          let details = await response.json();
          setAlbumDetails(details);
          console.log(details);
          setIsLoading(false);
          setIsError(false);
        } else {
          console.log("Server Error");
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchAlbum();
  }, []);

  if (isLoading) {
    return (
      <div className="container-fluid mainbody px-0">
        <div class="container-fluid covercontent">
          <Spinner animation="border" variant="dark" className="mx-auto" />;
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid mainbody px-0">
      {isError && <Alert variant="danger">An error occurred!</Alert>}
      <div class="container-fluid covercontent">
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

        <div class="container-fluid p-0 coverbox">
          <img
            src={albumDetails.cover_big}
            class="img-fluid bohemian"
            alt="Bohemian Rhapsody Album Cover"
          ></img>
          <div class="covertextbox">
            <h5
              class="albumcovertext"
              style={{ fontSize: "13px", fontWeight: "700" }}
            >
              ALBUM
            </h5>
            <h1 class="albumcovertext" style={{ letterSpacing: "-1px" }}>
              {albumDetails.title}
            </h1>
            <span
              style={{
                paddingRight: "3px",
                paddingTop: "3px",
                display: "inline-block",
              }}
            >
              <img
                class="queensmallImg"
                src={albumDetails.artist.picture_small}
              ></img>
            </span>
            <span
              class="albumcovertext mr-2"
              style={{ fontSize: "13px", fontWeight: "700" }}
            >
              {albumDetails.artist.name}
            </span>
            <span class="albumcovertextsmall">
              • 2018 • {albumDetails.nb_tracks} songs, 1 hr 19 min
            </span>
          </div>
        </div>
      </div>

      <div class="container-fluid bodycontent">
        <div class="container-fluid p-0 mb-3 d-flex">
          <div class="playbutton d-inline-block mr-4"></div>
        </div>
      </div>
    </div>
  );
}

export default AlbumPage;
