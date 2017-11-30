import React, {Component} from "react";
import $ from 'jquery';
const registerLink = "http://localhost:8000/register";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {login: "", password: "", dataBaseUrl: this.props.dataBaseUrl};
        this.typingLogin = this.typingLogin.bind(this);
        this.typingPassword = this.typingPassword.bind(this);
    }


    register = () => {
                $.post(registerLink, {
                    login: this.state.login, 
                    password: this.state.password
                });  
    }

    typingLogin(event) {
        this.setState({login: event.target.value});
    }

    typingPassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
            return (
                <div>
                    <h1>Registration</h1>
                    <div>
                    <form onSubmit={this.register}>
                        <input type="text"placeholder="Login"name="login"required onChange={this.typingLogin}></input>
                        <input type="text"placeholder="Password"name="password"required onChange={this.typingPassword}></input>
                        <input type="submit" value="Register" />
                    </form>
                    </div>
                </div>
            );
     
    }
}

export default Registration;