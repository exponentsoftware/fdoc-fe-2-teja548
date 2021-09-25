// import logo from './logo.svg';
import React, { Component } from 'react'
import AddAlbum from './AddAlbum'
// import Album from './Components/Album'
import Albums from './Albums';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: [
        { id: 1, artist: "Vijay T", album_title: "Master", album_cover: "Music Anirudh R", songs: "Sound Track1" },
        { id: 2, artist: "Naveen Polishetty", album_title: "Jathirathnalu", album_cover: "Music Radhan", songs: "Sound Track2" },
        { id: 3, artist: "Suriya", album_title: "Aakasam Nee Haddura", album_cover: "Music G. V. Prakash", songs: "Sound Track3" },
      ],
      errorMsg: ''
    }
    this.receiver = this.receiver.bind(this)
    this.delete = this.delete.bind(this)
  }

  receiver = () => {
    let { albums, obj } = this.state;
    albums.push(obj);
    console.log('Hi from receiver method = pushed new album');
  }
  delete() {
    let { albums, obj } = this.state;
    albums.pop(obj);
    console.log('Hi from receiver method = pushed new album');
    console.log('Hi from delete method');
  }
  render() {
    return (

      <div className="App">
        <AddAlbum receiveFunc={this.receiver} />
        {/* <Album artist={this.state.artist} album_title={this.state.album_title} album_cover={this.state.album_cover}/> */}
        <Albums albums={this.state.albums} deleteFunc={this.delete} />
      </div>

    )
  }
}

export default App