import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
// import Home from "./home/Home";
import EventList from "./event/EventList";
import EventForm from "./event/EventForm";
import EventEditForm from "./event/EventEditForm";
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import NewsEditForm from "./news/NewsEditForm";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  // returns true/false
  credentialAuth = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        {/* <Route
          exact
          path="/home"
          render={props => {
            if (this.credentialAuth()) {
              return <Home {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        /> */}
        <Route
          exact
          path="/events"
          render={props => {
            return this.credentialAuth() ? (
              <EventList {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/events/new"
          render={props => {
            return this.credentialAuth() ? (
              <EventForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />

        <Route
          path="/events/:eventId(\d+)/edit"
          render={props => {
            return this.credentialAuth() ? (
              <EventEditForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />

        {/* _______________________NEWS___________________________ */}

        <Route
          exact
          path="/news"
          render={props => {
            return <NewsList {...props} />;
          }}
        />
        <Route
          path="/news/new"
          render={props => {
            return <NewsForm {...props} />;
          }}
        />
        <Route
          path="/news/:newId(\d+)/edit"
          render={props => {
            return <NewsEditForm {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
