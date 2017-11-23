import React, {Component} from 'react';
import objects from './TatarChat';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "", username: this.props.username}
        this.send = this.send.bind(this);
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

    render() {//
        return (
            <form method="post" action="http://localhost:8000/postmessage"> 
            <div>
                <input
                type="text"
               // onChange={this.typing}
               // value = {this.state.value}
                placeholder="write here..."
                name="message"
                required />
            </div>
            <input type="submit" value="Send" />
          </form>

          
        )
    }
}

export default TextInput;