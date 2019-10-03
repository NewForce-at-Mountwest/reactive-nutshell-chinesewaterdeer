import React, { Component } from 'react'
    //import the components we will need
    import MessageCard from './MessageCard'
    import MessageManager from '../../modules/MessageManager'

    class MessageList extends Component {
        //define what this component needs to render
        state = {
            messages: [],
        }

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
          }
    componentDidMount(){
        console.log("MESSAGE LIST: ComponentDidMount");
        //getAll from MessageManager and hang on to that data; put it in state
        MessageManager.getAll()
        .then((messagesFromDatabase) => {
            this.setState({
                messages: messagesFromDatabase
            })
        })
    }

    render(){
        console.log("MESSAGE LIST: Render");

        return(
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
                <MessageCard key={singleMessage.id} messageProp={singleMessage} deleteMessage={this.deleteMessage} {...this.props} />)}
            </div>
            </>
        )
    }
}

export default MessageList
