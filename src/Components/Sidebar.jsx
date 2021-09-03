import React from "react";
import { Link } from "react-router-dom";
import logo from "../spotifylogo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <Link to="/">
          <img src={logo} alt="Spotify Logo" className="logo"></img>
        </Link>
      </div>
      <ul className="sidebar-nav flex-column">
        <li className="sidelistcurrent">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "rgb(166, 166, 166)" }}
          >
            <a className="navitem">
              <span
                className="iconify mr-3"
                data-icon="el:home"
                data-inline="false"
                data-width="20px"
                data-height="20px"
              ></span>
              Home
            </a>
          </Link>
        </li>
        <li className="sidelist" data-toggle="modal">
          <a className="navitem" href="#">
            <span
              className="iconify mr-3"
              data-icon="akar-icons:search"
              data-inline="false"
              data-width="20"
              data-height="20"
            ></span>

            <span
              type="button"
              className=""
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Search
            </span>
          </a>
        </li>
        <li className="sidelist ml-4">Your Library</li>
        <br />
        <li className="sidelist mt-2">
          <a className="navitem" href="#">
            Create Playlist
          </a>
        </li>
        <li className="sidelist">
          {" "}
          <span id="heart">
            <div id="heartbox"></div>
          </span>
          <a className="navitem" href="#">
            Liked Songs
          </a>
        </li>
      </ul>
      <hr></hr>
      <ul className="sidebar-playlists mb-2">
        <li className="sideplaylist">
          <a className="playlistitem" href="#">
            Funky Heavy Bluesy
          </a>
        </li>
        <li className="sideplaylist">
          <a className="playlistitem" href="#">
            Your Top Songs 2020
          </a>
        </li>
        <li className="sideplaylist">
          <a className="playlistitem" href="#">
            In Love With You - Erykah Badu
          </a>
        </li>
        <li className="sideplaylist">
          <a className="playlistitem" href="#">
            This Is Rod Stewart
          </a>
        </li>
        <li className="sideplaylist">
          <a className="playlistitem" href="#">
            FRANCHISE ft. Young Thug & M.I.A.
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Your Top Songs 2019
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Palleggio
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            This Is Joe Bonamassa
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jun19
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            This Is Opeth
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Metal Ballads
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            New Playlist
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Your Top Songs 2018
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jazz Classics Blue Note Editi
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
        <li class="sideplaylist">
          <a class="playlistitem" href="#">
            Jack 30th Party
          </a>
        </li>
      </ul>
      <footer>
        <p id="installapp">
          {" "}
          <span
            className="iconify mr-2"
            data-icon="bi:arrow-down-circle"
            data-inline="false"
            data-width="20"
            data-height="20"
          ></span>
          Install App
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
