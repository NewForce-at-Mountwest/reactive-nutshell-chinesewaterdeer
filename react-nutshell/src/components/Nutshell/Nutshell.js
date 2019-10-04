import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import "./Nutshell.css"
import NavBar from "./NavBar/NavBar"
// creating component to render the nav bar and using ApplicationViews as a page view
class Nutshell extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
}

export default Nutshell;