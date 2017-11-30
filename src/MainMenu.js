import React, {Component} from "react";
import ReactDOM from "react-dom";


 
class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login, 
            password: this.props.password, 
            name: this.props.name, 
            surname: this.props.surname,
            photo: this.props.photo,
            dato: this.props.dato
        };
    }

    changeName = () => {
        this.setState({name: prompt("Write your name", this.state.name)});
    }



    render() {
        return (
            <div>
                
                <h1>dato: {this.state.dato}</h1>
           <h1>Login: {this.state.login}</h1>
           <h1 onClick={this.changeName} >Name: {this.state.name}</h1>
           <h1>Surname: {this.state.surname}</h1>
           <h1>Photo: {this.state.photo}</h1>
           </div>
        );
    }
}

export default MainMenu;