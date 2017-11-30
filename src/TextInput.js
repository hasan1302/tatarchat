import React, {Component} from 'react';
import $ from 'jquery';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "", username: this.props.username}
        this.send = this.send.bind(this);
        this.typing = this.typing.bind(this);
        
    }

  

    typing(event) {
        this.setState({text: event.target.value});
       // this.props.upd(this.state.text);
      }



    send(event) {
        console.log(this.state.username + "  posted  " + this.state.text);
        event.preventDefault();
        $.post( "http://localhost:8000/postmessage", { name: this.state.username, message: this.state.text } );
        //event.target.value = "";
        this.setState({text: this.state.text, username: this.state.username});
        this.props.upd(this.state.text);
    }

    render() {
        return (
            <form onSubmit={this.send}> 
            <div>
                <input
                type="text"
                onChange={this.typing}
                value = {this.state.value}
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