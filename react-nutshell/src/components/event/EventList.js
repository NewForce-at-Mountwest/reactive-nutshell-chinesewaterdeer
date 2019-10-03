import React, { Component } from "react";
//import the components we will need
import EventCard from "./EventCard";
import EventManager from "../../modules/EventManager";

class EventList extends Component {
  //define what this component needs to render
  state = {
    events: []
  };

  deleteEvent = id => {
    EventManager.delete(id).then(() => {
      EventManager.getAll().then(newEvents => {
        this.setState({
          events: newEvents
        });
      });
    });
  };

  componentDidMount() {
    console.log("EVENT LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    EventManager.getAll().then(eventsFromDatabase => {
      this.setState({
        events: eventsFromDatabase
      });
    });
  }

  render() {
    console.log("EventList: Render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/events/new");
            }}
          >Add Event</button>
        </section>

        <div className="container-cards">
          {this.state.events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              deleteEvent={this.deleteEvent}
            />
          ))}
        </div>
      </>
    );
  }
}
export default EventList;