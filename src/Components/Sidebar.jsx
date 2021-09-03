import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Router>
        <div className="sidebar-brand">
          <Link to="/index.html">
            <img src="spotifylogo.svg" alt="Spotify Logo" class="logo"></img>
          </Link>
        </div>
        <ul class="sidebar-nav flex-column">
          <li class="sidelistcurrent">
            <a class="navitem" href="#">
              <span
                class="iconify mr-3"
                data-icon="el:home"
                data-inline="false"
                data-width="20px"
                data-height="20px"
              ></span>
              Home
            </a>
          </li>
          <li class="sidelist" data-toggle="modal">
            <a class="navitem" href="#">
              <span
                class="iconify mr-3"
                data-icon="akar-icons:search"
                data-inline="false"
                data-width="20"
                data-height="20"
              ></span>

              <span
                type="button"
                class=""
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Search
              </span>
            </a>
          </li>
          <li class="sidelist">Your Library</li>
          <br />
          <li class="sidelist mt-2">
            <a class="navitem" href="#">
              Create Playlist
            </a>
          </li>
          <li class="sidelist">
            {" "}
            <span id="heart">
              <div id="heartbox"></div>
            </span>
            <a class="navitem" href="#">
              Liked Songs
            </a>
          </li>
        </ul>
        <hr></hr>
        <ul class="sidebar-playlists mb-2">
          <li class="sideplaylist">
            <a class="playlistitem" href="#">
              Funky Heavy Bluesy
            </a>
          </li>
          <li class="sideplaylist">
            <a class="playlistitem" href="#">
              Your Top Songs 2020
            </a>
          </li>
          <li class="sideplaylist">
            <a class="playlistitem" href="#">
              In Love With You - Erykah Badu
            </a>
          </li>
          <li class="sideplaylist">
            <a class="playlistitem" href="#">
              This Is Rod Stewart
            </a>
          </li>
          <li class="sideplaylist">
            <a class="playlistitem" href="#">
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
              class="iconify mr-2"
              data-icon="bi:arrow-down-circle"
              data-inline="false"
              data-width="20"
              data-height="20"
            ></span>
            Install App
          </p>
        </footer>
      </Router>
    </div>
  );
};

export default Sidebar;
