import React, {Component} from "react";
import $ from 'jquery';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {login: "", password: "", newpassword: "", dataBaseUrl: this.props.dataBaseUrl};
        this.typingLogin = this.typingLogin.bind(this);
        this.typingPassword = this.typingPassword.bind(this);
        this.typingNewPassword = this.typingNewPassword.bind(this);
    }


    changepassword = () => {
            if (this.state.password !== this.state.newpassword) {
                $.post(this.state.dataBaseUrl, {
                    login: this.state.login, 
                    password: this.state.password,
                    newpassword: this.state.newpassword
                }); 
            } else {
                alert("Same password");
            } 
    }

    typingLogin(event) {
        this.setState({login: event.target.value});
    }

    typingPassword(event) {
        this.setState({password: event.target.value});
    }

    typingNewPassword(event) {
        this.setState({newpassword: event.target.value});
    }

    render() {
            return (
                <div>
                    <h1>Change Password</h1>
                    <div>
                    <form onSubmit={this.changepassword}>
                        <input type="text"placeholder="Login"name="login"required onChange={this.typingLogin}></input>
                        <input type="text"placeholder="Old Password"name="password"required onChange={this.typingPassword}></input>
                        <input type="text"placeholder="New Password"name="newpassword"required onChange={this.typingNewPassword}></input>
                        <input type="submit" value="Change Password" />
                    </form>
                    </div>
                    
                </div>
            );
     
    }
}

export default ChangePassword;