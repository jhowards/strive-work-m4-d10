import React from "react";

function convertTime(time) {
  let time2 = Math.floor(time % 60);

  if (time2.toString().length < 2) {
    time2 = time2 * 10;
  }
  let length = Math.floor(time / 60) + ":" + time2;
  return length;
}

function AlbumBodyContent(props) {
  return (
    <div className="table-responsive pr-5">
      <table className="table table-hover">
        <caption style={{ fontSize: "11px", color: "rgb(153, 153, 153)" }}>
          © 2018 Queen Productions Ltd, under exclusive licence to Universal
          International Music BV
          <br />℗ A Virgin Records Release; This Compilation ℗ 2018 Queen
          Productions Ltd, under exclusive licence to Universal International
          Music BV
        </caption>
        <thead className="albumtableheader">
          <tr>
            <th
              scope="col"
              style={{ width: "30px", fontSize: "16px", paddingBottom: "5px" }}
            >
              #
            </th>
            <th scope="col" style={{ width: "90%" }}>
              TITLE
            </th>
            <th scope="col" style={{ textAlign: "center" }}></th>
          </tr>
        </thead>

        <tbody>
          {props.details.tracks.data.map((track, i) => (
            <tr key={track.id}>
              <th
                scope="row"
                className="tablenumbers"
                style={{ paddingTop: "30px" }}
              >
                {i + 1}
              </th>
              <td className="titletext" style={{ paddingTop: "30px" }}>
                {track.title} <br />{" "}
                <span class="alttext">{track.artist.name}</span>
              </td>
              <td className="alttext" style={{ paddingTop: "30px" }}>
                {convertTime(track.duration)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlbumBodyContent;
