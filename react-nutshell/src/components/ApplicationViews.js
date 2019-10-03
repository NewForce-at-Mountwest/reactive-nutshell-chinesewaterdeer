import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'
import NewsEditForm from './news/NewsEditForm'


class ApplicationViews extends Component {

    render() {
      return (
        <React.Fragment>
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