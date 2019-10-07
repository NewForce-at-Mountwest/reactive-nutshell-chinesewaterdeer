import React, { Component } from 'react'
// creating component for the home page layout.
class Home extends Component {

    render() {
        //fetching credentials from api and importing login card from login.js
        return (
            <section>

                <h1 className="home-nutshell-title">Welcome To Nutshell!</h1><br />
                <button type="logout" className="logout-btn" onClick={window.localStorage.clear()}>Log Out</button>
                <div id="login-card">
                </div>
            </section>
        )
    }
}

export default Home;