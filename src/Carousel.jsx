import React, {Component} from "react";
import $ from 'jquery';


const itemLinks = [
    "https://img.michaels.com/L6/3/IOGLO/873480262/212543415/10186042_r.jpg?fit=inside|540:540",
    "https://img.michaels.com/L6/3/IOGLO/873480591/212543728/10277944_r.jpg?fit=inside|540:540",
    "https://img.michaels.com/L6/3/IOGLO/873480987/212544099/10326634_r.jpg?fit=inside|540:540",
    "https://img.michaels.com/L6/3/IOGLO/873481420/212544486/10532465_r.jpg?fit=inside|540:540",
    "https://img.michaels.com/L6/3/IOGLO/873481402/212544469/10532374_r.jpg?fit=inside|540:540",
    "https://img.michaels.com/L6/3/IOGLO/873481002/212544113/10335725_r.jpg?fit=inside|540:540"
];

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.index = Array.from(Array(itemLinks.length), (_,x) => x);
        this.state = {firstItem: itemLinks[this.index[0]], mainItem: itemLinks[this.index[1]], lastItem: itemLinks[this.index[2]]};
    }

    update = () => {
        this.setState({
            firstItem: itemLinks[this.index[0]], 
            mainItem: itemLinks[this.index[1]], 
            lastItem: itemLinks[this.index[2]]
        });
    }

    nextItem = () => {
        this.index.push(this.index.shift());
        this.update();
    }

    previousItem = () => {
        this.index.unshift(this.index.pop());
        this.update();
    }

    render() {
            return (
            <div>
                <img src={this.state.firstItem} style={{width:150, height: 150}} alt="first item" onClick={this.previousItem}/>
                <img src={this.state.mainItem} style={{width:300, height: 300}} alt="main item"/>
                <img src={this.state.lastItem} style={{width:150, height: 150}} alt="last item" onClick={this.nextItem}/>
            </div>
            );
    }

}

export default Carousel;
