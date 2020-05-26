import React, { Component } from 'react';

// state
class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'halio everyone'
        }
    }

    changeMessage() {
        this.setState ({
            message: 'thanks for  click'
        })
    }

    render() {
        return(
        <div>
            <p>{this.state.message}</p>
            <button onClick={() => this.changeMessage()}>Click here!</button>            
        </div>    
        )
    }
}

export default Message