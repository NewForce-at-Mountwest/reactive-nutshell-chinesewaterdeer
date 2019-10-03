import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import "./EventForm.css";

class EventForm extends Component {
  state = {
    eventName: "",
    location: "",
    date: "",
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create event object, invoke the EventManager post method, and redirect to the full event list
   */
  constructNewEvent = evt => {
    evt.preventDefault();
    if (this.state.eventName === "" || this.state.location === "" || this.state.date === "") {
      window.alert("Please input an event name, location, and date");
    } else {
      this.setState({ loadingStatus: true });
      const event = {
        name: this.state.eventName,
        location: this.state.location,
        date: this.state.date
      };

      // Create the event and redirect user to event list
      EventManager.post(event).then(() =>
        this.props.history.push("/events")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="eventName"
                placeholder="Event name"
              />
              <label htmlFor="eventName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="location"
                placeholder="Location"
              />
              <label htmlFor="location">Location</label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Event date"
              />
              <label htmlFor="date">Date</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewEvent}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EventForm;
