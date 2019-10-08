import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'
import NewsEditForm from './news/NewsEditForm'
import MessageList from './messages/MessageList'
import MessageForm from './messages/MessageForm'
import MessageEditForm from './messages/MessageEditForm'
import Home from './home/Home'
import Login from './authenticate/Login'
import PhotoList from './photos/PhotoList'
import PhotoEditForm from './photos/PhotoEditForm'
import PhotoForm from './photos/PhotoForm'

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
                {/* Login route */}
                <Route exact path="/" render={(props) => {
                    return <Login {...props} />
                }} />
{/* registration route */}
            <Route
                  exact
                  path="/register"
                  render ={props =>{
                      return <Register {...props}/>;
                  }} />
                  {/* Home route + auth */}

                <Route exact path="/home" render={(props) => {
                    if (this.credentialAuth()) {
                        return <Home {...props} />
                    }
                    else {
                        return <Redirect to="/" />
                    }
                }} />
                {/* Photos with auth */}
                <Route exact path="/photos" render={(props) => {
                    return this.credentialAuth() ? <PhotoList {...props} /> : <Redirect to="/" />
                }} />
                <Route exact path="/photos/new" render={(props) => {
                       return this.credentialAuth() ? <PhotoForm {...props} /> : <Redirect to="/" />
                }} />
                <Route path="/photos/:photoId(\d+)/edit" render={(props) => {
                        return this.credentialAuth() ? <PhotoEditForm {...props} /> : <Redirect to="/" />
                }} />
                {/* News */}
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
                <Route exact path="/messages" render={(props) => {
                    return <MessageList {...props} />
                }}
                />
                <Route path="/messages/new" render={(props) => {
                    return <MessageForm {...props} />
                }}
                />
                <Route path="/messages/:messageId(\d+)/edit" render={props => {
                    return <MessageEditForm {...props} />
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
