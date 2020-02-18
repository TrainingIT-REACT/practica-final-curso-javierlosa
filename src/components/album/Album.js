import React, { Component } from 'react';

// Css
import './Album.css';

const Song = React.lazy(() => import('../song/Song'));

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      songs: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/songs');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        songs: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="album">
        <h3>Información completa del álbum</h3>
        <div className="col-sm-4">
          <div className="caratula">
            <img  src={this.props.imageSrc} alt={this.props.imageAlt}></img>
          </div>
          <div className="descripcion">
            <h5 className="">{this.props.title}</h5>
            <span className="row col-sm-12">{this.props.description}</span>
            /* Añadir a la descripción el nombre del artista además de la duración total de sus canciones */
          </div>
        </div>
        <div className="col-sm-8">
          <div className="lista-canciones">
            {this.state.songs.map(song => 
              (song.album_id == this.props.albumId) ? <Song key={song.id} title={song.name} duration={song.seconds} link="enlace a reproducción"/> : ''
            )}
          </div>
          /* Ver cómo hacer un join con json-server, obtener lista de canciones mostrando su duración */
        </div>
      </div>
    );
  }
}

export default Album;
