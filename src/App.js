import React, { Component } from 'react';
//import { subscribeToTimer } from './api';
import io from 'socket.io-client';


const objects = [];


function addMessage(msg) {
    console.log(msg + " added msg")
    objects.push(msg);
}

addMessage({
    "text": "da ti pidr", 
    "from": "Hasan",
    "to":  "Vova"
});

addMessage({
    "text": "ebanijr", 
    "from": "Hasan",
    "to":  "Vova"
});
addMessage({
    "text": "Пошел ты", 
    "from": "vova",
    "to":  "Hasan"
});



class LoginTatarChat extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "Admin", submitted: true};
        this.userNameSubmit = this.userNameSubmit.bind(this);
        this.userNameChange = this.userNameChange.bind(this);



    }

    userNameChange(event){
        this.setState({username: event.target.value});
    }

    userNameSubmit(event) {
 
        event.preventDefault();
        this.setState({ username: this.state.username, submitted: true });
      //  console.log(this.state.name + " submitted")  // NE STIRAI!!!! I POPROBUI ESHE RAZ EE ZDELAT!!!
    }

    render() {
       
        console.log(this.state)
        if (this.state.submitted) {
            return (
              <TatarChat username={this.state.username} />
            );
          }
        
        
        return (   
          
         

          <form onSubmit={this.userNameSubmit} className="username-container">
            <h1>TatarChat</h1>
            <div>
              <input
                type="text"
                onChange={this.userNameChange}
                placeholder="username..."
                required />
            </div>
            <input type="submit" value="Go" />
          </form>
          
        );


      }
}



class TatarChat extends Component { //class O100TatarChat
    constructor(props) {
        super(props);
        this.state = {messages:[]};

        this.sendMessage = this.sendMessage.bind(this);
        this.typing = this.typing.bind(this);

        this.socket = io( 'http://localhost:8000/', { query: `username=${props.username}` }).connect();
        this.socket.on('server:message', function (data)  {
          console.log(data);
          this.socket.emit('client:message', {data : 'Hello Client'})
         // this.addMessage2(message);
        });

      }

      sendMessage() {
        this.setState({history: this.state.history, username: this.state.username, active: false})
      }
    
      typing(event) {
       // this.setState({history: event.target.value, username: this.state.username, active: false});
      }

      sendHandler(message) {
        const messageObject = {
          username: this.props.username,
          message: "hui"
        };
    
        

        // Emit the message to the server
        this.socket.emit('client:message', {data: "Hello server"});
        this.addMessage2(messageObject);
      }
    
      addMessage2(message) {
        // Append the message to the component state
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages });
      }


    render() { 
    
       
        return (<div>
      
               
      <h1> {this.props.username} connected! </h1>
      <h1> {this.state.messages}  </h1>
            {objects.map((task, i)=>
                     <h1 key={i}>{objects[i].from} : {objects[i].text} </h1>          
                )}
  

  <form onSubmit={this.sendHandler} className="username-container">
            <div>
              <input
                type="text"
                onChange={this.typing}
                placeholder="write here..."
                required />
            </div>
            <input type="submit" value="Send" />
          </form>
               </div>

     

             )
        }
    
}





export default LoginTatarChat;