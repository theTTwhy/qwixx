import React, { Component } from "react";

class Dice extends Component {
    constructor(props) {
        super(props);

        // initiate all states
        this.state = {
            dice1: 1,
            dice2: 2,
            dice3: 3,
            dice4: 4,
            dice5: 5,
            dice6: 6,
        };
    }

    componentDidMount(){
        // Jo
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    randomNumbers() {
        this.setState({
            dice1: Math.floor(Math.random() * 6) + 1,
            dice2: Math.floor(Math.random() * 6) + 1,
            dice3: Math.floor(Math.random() * 6) + 1,
            dice4: Math.floor(Math.random() * 6) + 1,
            dice5: Math.floor(Math.random() * 6) + 1,
            dice6: Math.floor(Math.random() * 6) + 1,
        });
    }

    render() {

        return (
            <div className="row">
                <div className="col-12 col-md-2 d-flex justify-content-center align-content-center">
                    <div className={(this.state.dice1 === 1 ? "dice dice-one" : this.state.dice1 === 2 ? "dice dice-two" : this.state.dice1 === 3 ? "dice dice-three" : this.state.dice1 === 4 ? "dice dice-four" : this.state.dice1 === 5 ? "dice dice-five" : this.state.dice1 === 6 ? "dice dice-six" : "dice dice-red") + " dice-red"}>
                        <span className="eyes" />
                        <span className="eyes-two" />
                    </div>
                </div>
                <div className="col-12 col-md-2 d-flex justify-content-center align-content-center">
                    <div className={(this.state.dice2 === 1 ? "dice dice-one" : this.state.dice2 === 2 ? "dice dice-two" : this.state.dice2 === 3 ? "dice dice-three" : this.state.dice2 === 4 ? "dice dice-four" : this.state.dice2 === 5 ? "dice dice-five" : this.state.dice2 === 6 ? "dice dice-six" : "dice dice-red") + " dice-yellow"}>
                        <span className="eyes" />
                        <span className="eyes-two" />
                    </div>
                </div>
                <div className="col-12 col-md-2 d-flex justify-content-center align-content-center">
                    <div className={(this.state.dice3 === 1 ? "dice dice-one" : this.state.dice3 === 2 ? "dice dice-two" : this.state.dice3 === 3 ? "dice dice-three" : this.state.dice3 === 4 ? "dice dice-four" : this.state.dice3 === 5 ? "dice dice-five" : this.state.dice3 === 6 ? "dice dice-six" : "dice dice-red") + " dice-green"}>
                        <span className="eyes" />
                        <span className="eyes-two" />
                    </div>
                </div>
                <div className="col-12 col-md-2 d-flex justify-content-center align-content-center">
                    <div className={(this.state.dice4 === 1 ? "dice dice-one" : this.state.dice4 === 2 ? "dice dice-two" : this.state.dice4 === 3 ? "dice dice-three" : this.state.dice4 === 4 ? "dice dice-four" : this.state.dice4 === 5 ? "dice dice-five" : this.state.dice4 === 6 ? "dice dice-six" : "dice dice-red") + " dice-blue"}>
                        <span className="eyes" />
                        <span className="eyes-two" />
                    </div>
                </div>
                <div className="col-12 col-md-2 d-flex justify-content-center align-content-center">
                    <div className={(this.state.dice5 === 1 ? "dice dice-one" : this.state.dice5 === 2 ? "dice dice-two" : this.state.dice5 === 3 ? "dice dice-three" : this.state.dice5 === 4 ? "dice dice-four" : this.state.dice5 === 5 ? "dice dice-five" : this.state.dice5 === 6 ? "dice dice-six" : "dice dice-red")}>
                        <span className="eyes" />
                        <span className="eyes-two" />
                    </div>
                </div>
                <div className="col-12 col-md-2 d-flex justify-content-center align-content-center">
                    <div className={(this.state.dice6 === 1 ? "dice dice-one" : this.state.dice6 === 2 ? "dice dice-two" : this.state.dice6 === 3 ? "dice dice-three" : this.state.dice6 === 4 ? "dice dice-four" : this.state.dice6 === 5 ? "dice dice-five" : this.state.dice6 === 6 ? "dice dice-six" : "dice dice-red")}>
                        <span className="eyes" />
                        <span className="eyes-two" />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center align-content-center">
                    <div className="rol-the-dice" onClick={this.randomNumbers.bind(this)}>
                        Roll the dice!
                    </div>
                </div>
            </div>
        );
    }

}

export default Dice;
