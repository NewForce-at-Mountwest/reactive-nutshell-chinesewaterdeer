import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
// import Home from "./home/Home";
import EventList from "./event/EventList";
import EventForm from "./event/EventForm";
import EventEditForm from "./event/EventEditForm";
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import NewsEditForm from "./news/NewsEditForm";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";
import MessageEditForm from "./messages/MessageEditForm";
import Home from "./home/Home";
import Login from "./authenticate/Login";
import PhotoList from "./photos/PhotoList";
import PhotoEditForm from "./photos/PhotoEditForm";
import PhotoForm from "./photos/PhotoForm";

// Task Imports
import TaskList from "./task/TaskList";
import TaskForm from "./task/TaskForm";
import TaskEditForm from "./task/TaskEditForm";
//
import Register from "./register/Register";

// component for routing each link in the nav bar to a certain page of the application
class ApplicationViews extends Component {
  // Check if credentials are in local storage
  // returns true/false
  credentialAuth = () => localStorage.getItem("userId") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/home"
          render={props => {
            if (this.credentialAuth()) {
              return <Home {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
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
            return this.credentialAuth() ? (
              <NewsList {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/news/new"
          render={props => {
            return this.credentialAuth() ? (
              <NewsForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/news/:newId(\d+)/edit"
          render={props => {
            return this.credentialAuth() ? (
              <NewsEditForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          exact
          path="/"
          render={props => {
            return <Login {...props} />;
          }}
        />
        <Route
          exact
          path="/register"
          render={props => {
            return <Register {...props} />;
          }}
        />
        {/* Photos with auth */}
        <Route
          exact
          path="/photos"
          render={props => {
            return this.credentialAuth() ? (
              <PhotoList {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          exact
          path="/photos/new"
          render={props => {
            return this.credentialAuth() ? (
              <PhotoForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/photos/:photoId(\d+)/edit"
          render={props => {
            return this.credentialAuth() ? (
              <PhotoEditForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        {/* // Task Routes  */}
        <Route
          exact
          path="/tasks"
          render={props => {
            return this.credentialAuth() ? (
              <TaskList {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/tasks/new"
          render={props => {
            return this.credentialAuth() ? (
              <TaskForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/tasks/:taskId(\d+)/edit"
          render={props => {
            return this.credentialAuth() ? (
              <TaskEditForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          exact
          path="/messages"
          render={props => {
            return this.credentialAuth() ? (
              <MessageList {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/messages/new"
          render={props => {
            return this.credentialAuth() ? (
              <MessageForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/messages/:messageId(\d+)/edit"
          render={props => {
            return this.credentialAuth() ? (
              <MessageEditForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
