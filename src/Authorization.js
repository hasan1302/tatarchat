import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import MainMenu from './MainMenu';
const dataBaseUrl = "http://localhost:8000/login";

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {login: "", password: "", name: "", surname: "", photo: "",  dato: [], loginOk: false};
        this.login = this.login.bind(this);
        this.typingLogin = this.typingLogin.bind(this);
        this.typingPassword = this.typingPassword.bind(this);
    }

    componentDidMount() {
        fetch(dataBaseUrl)
        .then(response => response.json())
        .then(data => this.setState({dato: data}));
    }

    login() {
        let addToDatabase = false;
        for (let i = 0; i < this.state.dato.length; i++) {
            if (this.state.login === this.state.dato[i].login) {
                if (this.state.password === this.state.dato[i].password) {
                    alert("Login Successfull");
                    sessionStorage.setItem('logined', 'true');
                    this.setState({loginOk: true, dato: this.state.dato[i]._id});
                    break;
                } else {
                    alert("Wrong Password");
                    break;
                }
            } else {
                addToDatabase = true;
                break;
            }
        } 
          if (addToDatabase === true) {
            $.post(dataBaseUrl, {
                login: this.state.login, 
                password: this.state.password, 
                name: this.state.name,
                surname: this.state.surname,
                photo: this.state.photo
            });

            alert("Created Account: " + this.state.login + " " + this.state.password);
            sessionStorage.setItem('logined', 'true');
           // this.setState({loginOk: true});
        }
    }

    typingLogin(event) {
        this.setState({login: event.target.value});
    }

    typingPassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        if (sessionStorage.getItem('logined') !== 'true') {
            return (
                <div>
                    <h1>Authorization</h1>
                    <div>
                    <form onSubmit={this.login}>
                        <input type="text"placeholder="Login"name="login"required onChange={this.typingLogin}></input>
                        
                        <input type="text"placeholder="Password"name="password"required onChange={this.typingPassword}></input>
                        <input type="submit" value="Login/Register" />
                    </form>
                    </div>
                </div>
            );
        } else {
            return (
            <MainMenu 
                login={this.state.login} 
                password={this.state.password} 
                name={this.state.name} 
                surname={this.state.surname} 
                photo={this.state.photo}
                dato={this.state.dato}
            />);
        }
     
    }
}

export default Authorization;