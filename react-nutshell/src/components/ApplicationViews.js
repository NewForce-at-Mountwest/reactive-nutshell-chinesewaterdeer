import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
// import Home from "./home/Home";
import EventList from "./event/EventList";
import EventForm from "./event/EventForm";
// import EventDetail from "./event/EventDetail";
import EventEditForm from "./event/EventEditForm";
import NewsList from './news/NewsList';
import NewsForm from './news/NewsForm';
import NewsEditForm from './news/NewsEditForm'


class ApplicationViews extends Component {
  // Check if credentials are in local storage
  // returns true/false
//   isAuthenticated = () => localStorage.getItem("credentials") !== null;

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
          render={(props) => {
          return <EventList {...props} />;
            // if (this.isAuthenticated()) {
            // } else {
            //   return <Redirect to="/login" />;
            }
          }
        />
        <Route
          path="/events/new"
          render={(props) => {
            return <EventForm {...props} />
            // this.isAuthenticated() ? (

            // ) : (
            //   <Redirect to="/login" />
            // );
          }}
        />
        {/* <Route
          path="/events/:eventId(\d+)"
          render={(props) => {
            return
            // this.isAuthenticated() ? (
              <EventDetail
                {...props}
                eventId={parseInt(props.match.params.eventId)}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        /> */}
        <Route
          path="/events/:eventId(\d+)/edit"
          render={props => {
            return <EventEditForm {...props} />;
          }}
        />

{/* _______________________NEWS___________________________ */}

          <Route exact path="/news" render={(props) => {
            return <NewsList {...props}/>
          }} />
          {/* <Route exact path="/news/:newId(\d+)" render={(props) => {
          // Pass the newsId to the NewsDetailComponent
          return <NewsDetail {...props} animalId={parseInt(props.match.params.newsId)} />
        }} /> */}
        <Route path="/news/new" render={(props) => {
          return <NewsForm {...props} />
        }} />
        <Route path="/news/:newId(\d+)/edit" render={props => {
            return <NewsEditForm {...props} />
          }}
        />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews
