import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
// import Home from "./home/Home";
import EventList from "./event/EventList";
import EventForm from "./event/EventForm";
import EventDetail from "./event/EventDetail";
import EventEditForm from "./event/EventEditForm"

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  // returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        {/* <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        /> */}
        <Route
          exact
          path="/events"
          render={props => {
            if (this.isAuthenticated()) {
              return <EventList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/events/new"
          render={props => {
            return this.isAuthenticated() ? (
              <EventForm {...props} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/events/:eventId(\d+)"
          render={props => {
            return this.isAuthenticated() ? (
              <EventDetail
                {...props}
                eventId={parseInt(props.match.params.eventId)}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/eventss/:eventId(\d+)/edit"
          render={props => {
            return <EventEditForm {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;