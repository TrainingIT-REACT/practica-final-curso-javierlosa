import React, { Component } from 'react';

// Css
import './Albums.css';

const Card = React.lazy(() => import('../utils/card/Card'));

class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="albums">
        <h3>Álbums disponibles</h3>
        { this.state.loading ?
          <p>Cargando...</p>
          : <div className="cards">
            {this.state.albums.map(album => 
              <Card key={album.id} imageSrc={album.cover} imageAlt={album.name} title={album.name} description={album.artist} link={album.id}/>
            )}
          </div>
        }
        
      </div>
    );
  }
}

export default Albums;
