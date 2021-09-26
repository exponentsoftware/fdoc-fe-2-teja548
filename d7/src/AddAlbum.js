import React, { useState, useEffect } from "react";
import "./AddAlbum.css";
import data from "./mock-data.json";
import Album from "./Album";

const AddAlbum = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addAlbumData, setAddAlbumData] = useState({
    id: Math.floor(Math.random() * 100 + 1).toString(),
    title: "",
    artist: "",
    album: "",
    image: "",
    song: "",
  });

  const setData = () => {
    data.push(addAlbumData);
    console.log(data);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addAlbumData };
    newFormData[fieldName] = fieldValue;

    setAddAlbumData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      title: addAlbumData.title,
      artist: addAlbumData.artist,
      album: addAlbumData.album,
      image: addAlbumData.image,
      song: addAlbumData.song,
    };
    setData(newContact);
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={isOpen ? "add-album-click" : "add-album"}>
        <h2
          style={{ marginLeft: 50, marginTop: 30, cursor: "pointer" }}
          onClick={() => onClick()}
        >
          Close
        </h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="title"
            required="required"
            placeholder="Enter a title"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="artist"
            required="required"
            placeholder="Enter an artist name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="album"
            required="required"
            placeholder="Enter a album..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="song"
            required="required"
            placeholder="Enter an song link..."
            onChange={handleAddFormChange}
          />
          <input
            type="file"
            name="image"
            required="required"
            placeholder="Enter an image link..."
            onChange={handleAddFormChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <div
        style={{
          width: "100vw",
          height: 80,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <button onClick={() => onClick()}> Add Album </button>
      </div>

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
    </>
  );
};

export default AddAlbum;