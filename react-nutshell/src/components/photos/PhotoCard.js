import React, { Component } from 'react';
import './Photos.css';

// card containing photo information

class PhotoCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.props.photoProp.url} alt="Nuts" />
          </picture>
          <p>URL: {this.props.photoProp.url}</p>

          <button type="edit"
        onClick={() => {this.props.history.push(`/photos/${this.props.photoProp.id}/edit`)}}>Edit</button>
        <button type="button" onClick={() => this.props.deletePhoto(this.props.photoProp.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default PhotoCard;