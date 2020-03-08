import React, { Component } from 'react';

// Css
import './Album.css';

// Acciones
import { addAlbum } from '../../actions/albumHistory';

// Store
import store from '../../store';

const Song = React.lazy(() => import('../song/Song'));

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      songs: [],
      album: {},
      duration: ''
    }
  }

  async componentDidMount() {
    try {
      const resAlbum = await fetch(`/albums/${this.props.match.params.albumId}`);
      const jsonAlbum = await resAlbum.json();
      const resSongs = await fetch('/songs');
      const jsonSongs = await resSongs.json();
      var duration = 0;
      jsonSongs.map(song => (song.album_id == this.props.match.params.albumId) ? duration = duration + song.seconds : '');
      duration = Math.trunc(duration/=60);
      
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        songs: jsonSongs,
        album: jsonAlbum,
        duration: duration + ' minutos'
      }));

      // 4.2 Añade al store la canción a reproducir
      store.dispatch(addAlbum(this.state.album));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="album">
        <h3>Información completa del álbum</h3>
        <div className="col-sm-12 row">
        <div className="col-sm-4">
          <div className="caratula">
            <img src={this.state.album.cover} alt={this.state.album.name}></img>
          </div>
          <div className="descripcion">
            <h5 className="">{this.state.album.name}</h5>
            <span className="row col-sm-12">{this.state.album.artist}</span>
            <span className="row col-sm-12">{this.state.duration}</span>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="lista-canciones">
            {this.state.songs.map(song => 
              (song.album_id == this.props.match.params.albumId) ? <Song key={song.id} title={song.name} duration={song.seconds} link={`/reproductor/${song.id}`}/> : '')
            }
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Album;
