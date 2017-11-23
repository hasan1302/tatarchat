import React, { Component } from 'react';
//import io from 'socket.io-client';
import Message from './Message';
import TextInput from './TextInput'
import $ from 'jquery';

class TatarChat extends Component { //class O100TatarChat
    constructor(props) {
        super(props);
       // this.state = {name: this.props.name, messages: []};
       this.state = {messages: []};
    }
   
    componentDidMount() {
        fetch(`http://localhost:8000/messages`)
          .then(response => response.json())
          .then(data => this.setState({messages: data}));
          console.log($)
      }


    render() {  
    if (this.state.messages[0] === undefined) { return null}
        return (
            <div>
            {this.state.messages.map((task, i)=>  
                <Message key={i} from={this.state.messages[i].name} text={this.state.messages[i].message} />  
            )}
            <TextInput username={localStorage.getItem("uername")}/>
            </div>
             )            
    }

 
        
    
}

export default TatarChat;