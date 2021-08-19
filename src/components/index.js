import React, { Component } from "react";
import Dice from "./dice";

class Index extends Component {
    constructor(props) {
        super(props);

        // initiate all states
        this.state = {
            state: 0,
        };
    }

    componentDidMount(){
        // set title on page
        document.title = "Qwixx";
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Dice />
                    </div>
                </div>
            </div>
        );
    }

}

export default Index;
