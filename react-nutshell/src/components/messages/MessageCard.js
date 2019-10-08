import React, { Component } from 'react';

class MessageCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./msg.png')} alt="Message" />
                    </picture>
                    <h3>Name: <span className="card-messageName">{this.props.messageProp.userId}</span></h3>
                    <p>Message: {this.props.messageProp.message}</p>
                    <button type="button"
                        onClick={() => this.props.renderEditForm(this.props.messageProp)}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteMessage(this.props.messageProp.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default MessageCard;