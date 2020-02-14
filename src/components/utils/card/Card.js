import React, { Component } from 'react';

// Css
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="card">
          <img className="card-img-top" src={this.props.imageSrc} alt={this.props.imageAlt}></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <span className="row col-sm-12 card-descripcion">{this.props.description}</span>
            <a href="#" className="btn btn-primary">{this.props.link}</a>
          </div>
        </div>
    );
  }
}

export default Card;
