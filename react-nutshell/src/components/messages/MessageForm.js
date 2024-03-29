import React, { Component } from 'react';
import MessageManager from '../../modules/MessageManager';
import './MessageForm.css'

class MessageForm extends Component {
    state = {
        message: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create message object, invoke the MessageManager post method, and redirect to the full message list
    */
    constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.message === "") {
            window.alert("Please input a new message!");
        } else {
            this.setState({ loadingStatus: true });
            const message = {
                message: this.state.message,
                userId: 1
            };

            // Create the animal and redirect user to animal list
            MessageManager.post(message)
            .then(() => this.props.history.push("/messages"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="message"
                        placeholder="Message"
                        />
                        <label htmlFor="message">Message</label>

                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewMessage}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default MessageForm