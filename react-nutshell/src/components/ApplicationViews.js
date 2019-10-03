import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'
import NewsEditForm from './news/NewsEditForm'
import Home from './home/Home'
class ApplicationViews extends Component {

    credentialAuth = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>

                <Route exact path="/" render={(props) => {
                    return <Home {...props} />
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
            </React.Fragment>
        )
}
              }
export default ApplicationViews;
