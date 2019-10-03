import React, { Component } from "react"
import RegisterManager from "../../modules/RegisterManager";

class Register extends Component {

  // Set initial state
  state = {
    userName: "",
    email: "",
    password: "",
    users: [],
    loadingStatus: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }

  compononentDidMount(){

    RegisterManager.getAll().then(parsedUsers => {
        console.log("Users DB", parsedUsers)

        this.setState({users: parsedUsers})
    })
  }

  constructNewUser = evt => {

    evt.preventDefault();

    if (this.state.userName === "" || this.state.email) {
        window.alert("Please input an unique user name and e-mail address");
    } else {
        this.setState({ loadingStatus: true });
        const user = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,

        };

        RegisterManager.post(user).then(() =>
            this.props.history.push("/users")
        );
    }
  }


  render() {
    return (
      <form>
        <fieldset>
            <h3>Register:</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="userName"
                    id="userName"
                    placeholder="User Name"
                    required="" autoFocus="" />
                <label htmlFor="inputUserName">User Name</label>

                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="E-mail Address"
                    required="" autoFocus="" />
                <label htmlFor="inputUserName">E-mail Address</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>

            <div className="alignRight">

                <button

                    type="submit"
                    disabled={this.state.loadingStatus}
                    onClick={this.constructNewUser}

                    >Submit

                </button>

            </div>
            
        </fieldset>
      </form>
    )
  }

}

export default Register