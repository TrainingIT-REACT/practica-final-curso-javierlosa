import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Css
import './MusicaRecomendada.css';

const Card = React.lazy(() => import('../utils/card/Card'));

class MusicaRecomendada extends Component {
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
      <div className="musica_recomendada">
        <div className="row col-sm-12">
          <div className="col-sm-8">
            <h3>Música Recomendada</h3>
          </div>
          <div className="col-sm-2">
            <Link to="/inicioSesion">Iniciar sesión</Link>
          </div>
          <div className="col-sm-2">
            <Link to="/albums">Albums</Link>
          </div>
        </div>
        
        { this.state.loading ?
          <p>Cargando...</p>
          : <div className="cards">
            {this.state.songs.map(song => 
              <Card key={song.id} imageSrc="/images/cover.jpg" imageAlt={song.name} title={song.name} titleLink={`/reproductor/${song.id}`} descriptionLink={`/album/${song.album_id}`} descriptionLinkInfo="Enlace a album"/>
            )}
          </div>
        }
        
      </div>
    );
  }
}

export default MusicaRecomendada;
