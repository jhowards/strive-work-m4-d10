import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";
import AlbumBodyContent from "./AlbumBodyContent";
import { Link } from "react-router-dom";

function AlbumPage() {
  const [albumDetails, setAlbumDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  function convertDuration(duration) {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - hours * 3600) / 60);
    return hours + " hr " + minutes + " min";
  }

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
            <Link
              to={"/artist/" + albumDetails.artist.id}
              style={{ textDecoration: "none" }}
            >
              <span
                class="albumcovertext mr-2"
                style={{ fontSize: "13px", fontWeight: "700" }}
              >
                {albumDetails.artist.name}
              </span>
            </Link>
            <span class="albumcovertextsmall">
              • {albumDetails.release_date.substring(0, 4)} •{" "}
              {albumDetails.nb_tracks} songs,{" "}
              {convertDuration(albumDetails.duration)}
            </span>
          </div>
        </div>
      </div>

      <div class="container-fluid bodycontent">
        <div class="container-fluid p-0 mb-3 d-flex">
          <div class="playbutton d-inline-block mr-4"></div>
        </div>
        <AlbumBodyContent details={albumDetails} />
      </div>
    </div>
  );
}

export default AlbumPage;
