import React, { Component } from "react"
import EventManager from "../../modules/EventManager"
import "./EventForm.css"

class EventEditForm extends Component {
    //set the initial state
    state = {
      eventName: "",
      location: "",
      date: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedEvent = {
        id: this.props.match.params.eventId,
        name: this.state.eventName,
        location: this.state.location,
        date: this.state.date
      };

      EventManager.update(editedEvent)
      .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
      EventManager.getOne(this.props.match.params.eventId)
      .then(event => {
          this.setState({
            eventName: event.name,
            location: event.location,
            date: event.date,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
            <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="eventName"
                placeholder="Event name"
                value={this.state.eventName}
              />
              <label htmlFor="eventName">Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="location"
                placeholder="Location"
                value={this.state.location}
              />
              <label htmlFor="location">Location</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Event date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEvent}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EventEditForm