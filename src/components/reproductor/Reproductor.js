import React, { Component } from 'react';

// Css
//import './Reproductor.css';

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
      console.log(json);
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        song: json
      }));
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
