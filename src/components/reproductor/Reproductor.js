import React, { Component } from 'react';
import { connect } from 'react-redux';

// Acciones
import { addSong } from '../../actions/songHistory';

// Store
import store from '../../store';

class Reproductor extends Component {
  constructor({props,history}) {
    super(props);

    this.state = {
      loading: true,
      song: {}
    }

    this.goBack = (e) => {
      // Evitamos que evento de navegación continue
      e.preventDefault();
      // Atrás!
      history.goBack();
    }

  }

  async componentDidMount() {
    try {
      const res = await fetch(`/songs/${this.props.match.params.songId}`);
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        song: json
      }));
      // 4.2 Añade al store la canción a reproducir
      store.dispatch(addSong(this.state.song));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
        // 1.2 Fragment
        // 3.3 Routing imperativo
        <>
          <div className="row col-sm-12">
            <button onClick={this.goBack}>Atrás</button>
          </div>
          <br></br>
          <div className="row col-sm-12">
            <audio ref="audio_tag" src={this.state.song.audio} controls autoPlay/>
          </div>
        </>
    );
  }
}

export default Reproductor;
