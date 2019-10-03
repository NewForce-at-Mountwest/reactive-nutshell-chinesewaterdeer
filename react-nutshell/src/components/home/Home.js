import React, { Component } from 'react'
import Login from '../authenticate/Login'
// creating component for the home page layout.
class Home extends Component {
    render() {
        //fetching credentials from api and importing login card from login.js
        return (
            <section>

                <h1>Welcome To Nutshell</h1><br />

                <div id="login-card">
                    {this.state.users.push(userLogin => <Login key={userLogin.id} userProp={userLogin} />)}
                </div>
            </section>
        )
    }
}

export default Home;