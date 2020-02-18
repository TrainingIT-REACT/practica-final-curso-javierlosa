import React, { Component } from 'react';

// Css
import './Reproductor.css';

class Reproductor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="reproductor">
          <a href={this.props.link}>
            <span>{this.props.title}</span>
            <span>{this.props.duration}</span>
          </a>
          <audio ref="audio_tag" src={this.props.audio} controls autoPlay/>
        </div>
    );
  }
}

export default Song;
