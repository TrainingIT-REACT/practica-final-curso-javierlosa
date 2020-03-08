import React, { Component } from 'react';

// Css
import './Albums.css';

// Componentes
import AlbumList from './AlbumList';

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
          : <AlbumList albums={this.state.albums}/>
        }
        
      </div>
    );
  }
}

export default Albums;
