import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EventCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <b>{this.props.event.name}</b></h3>
          <p>Location: {this.props.event.location}</p>
          <p>Location: {this.props.event.date}</p>
          {/* <button type="button" onClick={() => this.props.editEvent(this.props.event.id)}>Edit</button> */}
          <Link to={`/events/${this.props.event.id}/edit`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EventCard;