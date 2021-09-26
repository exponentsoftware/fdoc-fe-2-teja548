import React from "react";
import "./Albums.css";
import  data  from "./mock-data.json";
import Album from "./Album";

const Albums = () => {
  return (
    <div className="albums_container">
      {data.map((item) => {
        // console.log(item);
        const { id, artist, album, image, title, song } = item;
        return (
          <Album
            key={id}
            id={id}
            artist={artist}
            album={album}
            title={title}
            image={image}
            song={song}
          />
        );
      })}
    </div>
  );
};

export default Albums;