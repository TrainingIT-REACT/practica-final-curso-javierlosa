import React, { Component } from 'react';

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
        <h3>Música Recomendada</h3>
        { this.state.loading ?
          <p>Cargando...</p>
          : <div className="cards">
            {this.state.songs.map(song => 
              <Card key={song.id} imageSrc="/images/cover.jpg" imageAlt={song.name} title={song.name} description={song.audio} link={song.album_id}/>
            )}
          </div>
        }
        
      </div>
    );
  }
}

export default MusicaRecomendada;
