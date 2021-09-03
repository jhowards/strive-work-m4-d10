import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function ArtistPage() {
  const [artistDetails, setArtistDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  function convertDuration(duration) {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - hours * 3600) / 60);
    return hours + " hr " + minutes + " min";
  }

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id
        );
        if (response.ok) {
          console.log("response ok!");
          let details = await response.json();
          setArtistDetails(details);
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
    fetchArtist();
  }, []);

  if (isLoading) {
    return (
      <div className="container-fluid mainbody px-0">
        <div className="container-fluid covercontent">
          <Spinner animation="border" variant="dark" className="mx-auto" />;
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid mainbody px-0">
      {isError && <Alert variant="danger">An error occurred!</Alert>}
      <div className="navbar-fixed-top">
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

        <div className=" bodycontent artist-page">
          <div className="artist_title">
            <div className="artist_title-column">
              <h6>
                {" "}
                <span className="blue-icon"> Verified Artist</span>
              </h6>
              <div className="h1-artist">
                <h1>
                  <strong>{artistDetails.name}</strong>
                </h1>
                <p>{artistDetails.nb_fan} Monthly Listeners</p>
              </div>
            </div>
          </div>

          <section className="artist-tracks">
            <div className="artist-tracks_commands">
              <nav className="row">
                <div className="playbutton mr-3 grow">
                  <div className="play_artist-triangle"></div>
                </div>
                <button className="follow-button mx-2">
                  <p>FOLLOW</p>
                </button>

                <div className="artist-more-options mx-4">...</div>
              </nav>

              <section className="music-artist-most-listened"></section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
