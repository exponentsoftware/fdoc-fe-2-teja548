import React from "react";
import "./Album.css";

const Album = ({ id, artist, album, image, title, song }) => {
  return (
    <div key={id} className="album">
      <img src={image} alt={title} />
      <div className="col">
        <div className="col1">
          <h1> {title} </h1>
          <a href={song}>
            <button>Play</button>
          </a>
        </div>
        <div className="col2">
          <h2> {artist} </h2>
          <h3> {album} </h3>
        </div>
      </div>
    </div>
  );
};

export default Album;
