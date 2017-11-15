import React, {Component} from 'react';
import objects from './TatarChat';

//const rout = require('./note_routes');


class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "hui"}
        this.send = this.send.bind(this);
        //this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    }

  

    typing(event) {
        this.setState({text: event.target.value});
      }



    send(event) {
        const message = {from: this.props.name, text: this.state.text}
       // db.notes.insertOne(message);
        objects.push(message);
       // console.log("pushed" + message);
        event.preventDefault();
       // this.setState = {text: text}
    }

    render() {
        return (
            <form onSubmit={this.send} className="username-container">
            <div>
              <input
                type="text"
               // onChange={this.typing}
               // value = {this.state.value}
                placeholder="write here..."
                required />
            </div>
            <input type="submit" value="Send" />
          </form>
        )
    }
}

export default TextInput;