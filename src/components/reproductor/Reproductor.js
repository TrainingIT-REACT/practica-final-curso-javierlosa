import React, { Component } from 'react';
import { connect } from 'react-redux';

// Acciones
import { addSong } from '../../actions/songHistory';

// Store
import store from '../../store';

class Reproductor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      song: {}
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
        <>
          <audio ref="audio_tag" src={this.state.song.audio} controls autoPlay/>
        </>
    );
  }
}

export default Reproductor;
