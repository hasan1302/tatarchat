import React, { Component } from 'react';
//import io from 'socket.io-client';
import Message from './Message';
import TextInput from './TextInput'

const objects = [
    {
        from: "Admin",
        text: "MOY PERVIY TEXT"
    }
];

class TatarChat extends Component { //class O100TatarChat
    constructor(props) {
        super(props);
        this.state = {name: this.props.name};
    }


    render() { //<h1 key={i}>{objects[i].from} : {objects[i].text} </h1> 
    
       
        return (
            <div>
                {objects.map((task, i)=>  
                    <Message key={i} from={objects[i].from} text={objects[i].text} />      
                )}
                <TextInput name={this.state.name}/>

            </div>

     

             )
        }
    
}

export default TatarChat;