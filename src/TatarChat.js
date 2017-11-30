import React, { Component } from 'react';
//import io from 'socket.io-client';
import Message from './Message';
import TextInput from './TextInput'


class TatarChat extends Component { //class O100TatarChat
    constructor(props) {
        super(props);
        this.state = {username: this.props.username, messages: []};
        this.upd = this.upd.bind(this);
    }
   
    componentDidMount() {
        fetch(`http://localhost:8000/messages`)
          .then(response => response.json())
          .then(data => this.setState({messages: data}));
          if (this.state.messages === undefined) {
            this.setState({messages:[""]})
          }
      }


      upd(e) {
        console.log("updated");
        //e.preventDefault();
        this.componentDidMount()
        this.setState({username: this.props.username});
      }

    render() {  

    if (this.state.messages[0] === undefined) { return null}
        return (
            
            <div>
            {this.state.messages.map((task, i)=>  
                <Message key={i} from={this.state.messages[i].name} text={this.state.messages[i].message} />  
            )}
            <TextInput username={this.state.username} upd={this.upd}/>
            </div>
             )            
    }

 
        
    
}

export default TatarChat;