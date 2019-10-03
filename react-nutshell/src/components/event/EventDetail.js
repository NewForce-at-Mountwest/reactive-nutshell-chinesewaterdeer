import React, { Component } from 'react';
import EventManager from '../../modules/EventManager';
import './EventDetail.css'

class EventDetail extends Component {

    state = {
        name: "",
        location: "",
        date: "",
        loadingStatus: true
    }

    handleDelete = () => {
        //invoke the delete function in EventManger and re-direct to the event list.
        this.setState({loadingStatus: true})
        EventManager.delete(this.props.eventId)
        .then(() => this.props.history.push("/events"))
    }

    componentDidMount(){
        console.log("EventDetail: ComponentDidMount");
        //get(id) from EventManager and hang on to that data; put it into state
        EventManager.get(this.props.eventId)
        .then((event) => {
            this.setState({
                name: event.name,
                location: event.location,
                date: event.date,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
        <div className="card-content">
          <h3>Name: <b>{this.state.name}</b></h3>
          <p>Location: {this.state.location}</p>
          <p>Date: {this.state.date}</p>
          <button type="button" onClick={() => this.state.editedEvent(this.state.id)}>Edit</button>
        </div>
      </div>
      );
    }
}

export default EventDetail;