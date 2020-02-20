import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Css
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="card">
          {this.props.imageSrc || this.props.imageAlt ? <img className="card-img-top" src={this.props.imageSrc} alt={this.props.imageAlt}></img> : ''}
          <div className="card-body">
            {this.props.titleLink ? <Link className="row col-sm-12 card-descripcion" to={this.props.titleLink}>{this.props.title}</Link> : <h5 className="card-title">{this.props.title}</h5>}
            {this.props.description ? <span className="row col-sm-12 card-descripcion">{this.props.description}</span> : ''}
            {this.props.descriptionLink && this.props.descriptionLinkInfo ? <Link className="row col-sm-12 card-descripcion" to={this.props.descriptionLink}>{this.props.descriptionLinkInfo}</Link> : ''}
          </div>
        </div>
    );
  }
}

export default Card;
