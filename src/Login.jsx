import React, {Component} from "react";
import $ from 'jquery';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {login: "", password: "", dataBaseUrl: this.props.dataBaseUrl};
        this.typingLogin = this.typingLogin.bind(this);
        this.typingPassword = this.typingPassword.bind(this);
    }


    login = () => {
                $.post(this.state.dataBaseUrl, {
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
                    <h1>Log In</h1>
                    <div>
                    <form onSubmit={this.login}>
                        <input type="text"placeholder="Login"name="login"required onChange={this.typingLogin}></input>
                        <input type="text"placeholder="Password"name="password"required onChange={this.typingPassword}></input>
                        <input type="submit" value="Login" />
                    </form>
                    </div>
                </div>
            );
     
    }
}

export default Login;