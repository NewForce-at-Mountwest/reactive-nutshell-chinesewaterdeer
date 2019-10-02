import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import NewsCard from "./news/NewsCard"

class ApplicationViews extends Component {

    render() {
      return (
        <React.Fragment>
          <Route path="/news" render={(props) => {
            return <NewsCard />
          }} />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews