import React, { Component } from 'react';

class EventCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <picture>
            <img src={require('./event.png')} alt="Event" />
          </picture>
          <h3>Name: <b>{this.props.eventProp.name}</b></h3>
          <p>Location: {this.props.eventProp.location}</p>
          <p>Location: {this.props.eventProp.date}</p>

          <button type="button"
        onClick={() => {this.props.history.push(`/events/${this.props.eventProp.id}/edit`)}}>Edit</button>
        <button type="button" onClick={() => this.props.deleteEvent(this.props.eventProp.id)}>Delete</button>

        </div>
      </div>
    );
  }
}

export default EventCard;