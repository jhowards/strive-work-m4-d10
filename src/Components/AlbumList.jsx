import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";

class AlbumList extends Component {
  state = {
    albums: [],
  };

  componentDidMount = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA0MTg4NDUsImV4cCI6MTYzMTYyODQ0NX0.zIMrzOtDkjOPxVI-qkfVrjQbyig4tcBtT3pl-bAMbks"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock",
        requestOptions
      );

      if (response.ok) {
        let albums = await response.json();
        let albumsLimitedToTen = albums.data.splice(-10);
        console.log(albumsLimitedToTen);
        this.setState({ albums: albumsLimitedToTen });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 firstsection">
        {this.state.albums.map((album) => (
          <div key={album.id} className="col pr-2">
            <BrowserRouter>
              <Link to="/album:id" style={{ textDecoration: "none" }}>
                <div className="card morningcard mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <img
                        className="card-img morningimg"
                        src={album.album.cover_medium}
                        alt="..."
                      ></img>
                    </div>
                    <div className="col-md-9">
                      <div className="card-body ml-2">
                        <p className="card-text">{album.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </BrowserRouter>
          </div>
        ))}
      </div>
    );
  }
}

export default AlbumList;
