import React, { Component } from 'react'

// creating component to display login form and validate credentials
class Login extends Component {
    // set state
    state = {
        username: "",
        password: ""
    }

    // method to handle changing of input field
    handleFieldChange = (event) => {
        const stateChange = {}
        stateChange[event.target.id] = event.target.value
        this.setState(stateChange)
    }
    loginHandler = (loginEvent) => {
        loginEvent.preventDefault()
        localStorage.setItem(
            "credentials",
            JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        )
        this.props.history.push("/home")
    }
    render() {
        return (
            <form onSubmit={this.loginHandler}>
                <fieldset>
                    <h3>Sign In</h3>
                    <div className="xxxxx">
                        <input onChange={this.handleFieldChange} type="username"
                        id="username"
                        placeholder="Username"
                        required=""
                        autoFocus="" />
                        <label htmlFor="inputUsername">Username</label>
                        <input onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <button type="submit">Sign In</button>
                </fieldset>
            </form>
        )
    }
}

export default Login;