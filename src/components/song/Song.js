import React, { Component } from 'react';

// Css
import './Song.css';

class Song extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="song">
          <a href={this.props.link}>
            <span>{this.props.title}</span>
            <span>{this.props.duration}</span>
          </a>
        </div>
    );
  }
}

export default Song;
