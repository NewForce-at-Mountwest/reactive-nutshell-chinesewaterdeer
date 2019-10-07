import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'
import NewsEditForm from './news/NewsEditForm'
import Home from './home/Home'
import Login from './authenticate/Login'
// Task Imports
import TaskList from "./task/TaskList";
import TaskForm from "./task/TaskForm";
import TaskEditForm from './task/TaskEditForm'
//
import Register from "./register/Register";

// component for routing each link in the nav bar to a certain page of the application
class ApplicationViews extends Component {

    credentialAuth = () => localStorage.getItem("userId") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Login {...props} />
                }} />

            <Route
                  exact
                  path="/register"
                  render ={props =>{
                      return <Register {...props}/>;
                  }} />

                <Route exact path="/home" render={(props) => {
                    if (this.credentialAuth()) {
                        return <Home {...props} />
                    }
                    else {
                        return <Redirect to="/" />
                    }
                }} />
                <Route exact path="/news" render={(props) => {
                    return <NewsList {...props} />
                }} />
                <Route path="/news/new" render={(props) => {
                    return <NewsForm {...props} />
                }} />
                <Route path="/news/:newId(\d+)/edit" render={props => {
                    return <NewsEditForm {...props} />
                }}
                />

                <Route
                    exact
                    path="/tasks"
                    render={props => {
                        return <TaskList {...props} />;
                    }}
                />
                <Route
                    path="/tasks/new"
                    render={props => {
                        return <TaskForm {...props} />;
                    }}
                />
                <Route
                    path="/tasks/:taskId(\d+)/edit"
                    render={props => {
                        return <TaskEditForm {...props} />;
                    }}
                />
            </React.Fragment>
        )
    }
}
export default ApplicationViews;
