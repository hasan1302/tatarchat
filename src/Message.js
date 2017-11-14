import React, {Component} from 'react';


class Message extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> {this.props.from}: {this.props.text}</h1>
            </div>
        )
    }
}

export default Message;