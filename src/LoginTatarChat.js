import React, { Component } from 'react';
import TatarChat from './TatarChat'


class LoginTatarChat extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", submitted: false};
        this.userNameSubmit = this.userNameSubmit.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
    }

    userNameChange(event){
        this.setState({username: event.target.value});
    }

    userNameSubmit(event) {
        event.preventDefault();

        localStorage.setItem("username", this.state.username);
        localStorage.setItem("submitted", "true");
        this.setState({ username: this.state.username, submitted: true });
      //  console.log(this.state.name + " submitted")  // NE STIRAI!!!! I POPROBUI ESHE RAZ EE ZDELAT!!!
    }


    render() {
        if (localStorage.getItem("submitted")) {
            return (
              <TatarChat username={localStorage.getItem("username")} />
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







export default LoginTatarChat;