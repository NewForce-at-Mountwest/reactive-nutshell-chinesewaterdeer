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


// component for routing each link in the nav bar to a certain page of the application
class ApplicationViews extends Component {

    credentialAuth = () => localStorage.getItem("userId") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Login {...props} />
                }} />

                <Route exact path="/home" render={(props) => {
                    if (this.credentialAuth()) {
                        return <Home {...props} />
                    }
                    else {
                        return <Redirect to="/" />
                    }
                }} />
                <Route exact path="/photos" render={(props) => {
                    if (this.credentialAuth()) {
                        return <PhotoList {...props} />
                    }
                    else {
                        return <Redirect to="/" />
                    }
                }} />
                <Route exact path="/photos/new" render={(props) => {
                    if (this.credentialAuth()) {
                        return <PhotoForm {...props} />
                    }
                    else {
                        return <Redirect to="/" />
                    }
                }} />
                <Route path="/photos/:newId(/d+)/edit" render={(props) => {
                    if (this.credentialAuth()) {
                        return <PhotoEditForm {...props} />
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
            </React.Fragment>
        )
    }
}

export default ApplicationViews;
