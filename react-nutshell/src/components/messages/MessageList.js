import React, { Component } from 'react'
//import the components we will need
import MessageCard from './MessageCard'
import MessageManager from '../../modules/MessageManager'

class MessageList extends Component {
    //define what this component needs to render
    state = {
        messages: [],
        messageToEdit: {},
    };

    deleteMessage = id => {
        MessageManager.delete(id)
            .then(() => {
                MessageManager.getAll()
                    .then((newMessages) => {
                        this.setState({
                            messages: newMessages
                        })
                    })
            })
    };
    renderEditForm = messageObject => {
        console.log(messageObject)
        this.setState({
            messageToEdit: messageObject
        })
    };
    handleFieldChange = evt => {
        const stateToChange = {
            messageToEdit: this.state.messageToEdit
        }
        stateToChange.messageToEdit[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };
    updateExistingMessage = evt => {
        evt.preventDefault()
        const editedMessage = {
            id: this.state.messageToEdit.id,
            message: this.state.messageToEdit.message,
            userId: 1
        };

        MessageManager.update(editedMessage)
            .then(() => {
                MessageManager.getAll()
                    .then((newMessages) => {
                        this.setState({
                            messages: newMessages,
                            messageToEdit: {}
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("MESSAGE LIST: ComponentDidMount");
        //getAll from MessageManager and hang on to that data; put it in state
        MessageManager.getAll()
            .then((messagesFromDatabase) => {
                this.setState({
                    messages: messagesFromDatabase
                })
            })
    }

    render() {
        console.log("MESSAGE LIST: Render");

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/messages/new") }}>
                        Create New Message
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.messages.map(singleMessage =>
                        this.state.messageToEdit.id === singleMessage.id ?
                            <>
                                <form>
                                    <label htmlFor="messageToEdit">Message To Edit:</label>
                                    <input type="text" onChange={this.handleFieldChange} id="message" required
                                        className="form-control" value={this.state.messageToEdit.message} />
                                    <button type="button" onClick={this.updateExistingMessage}>Submit</button>
                                </form>
                            </> :
                            <MessageCard key={singleMessage.id} messageProp={singleMessage} deleteMessage={this.deleteMessage} renderEditForm={this.renderEditForm} {...this.props} />)}
                </div>
            </>
        )
    }
}

export default MessageList
