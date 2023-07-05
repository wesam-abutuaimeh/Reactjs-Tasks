import React, { Component } from "react";
import Counter from "../Counter";

class Total extends Component {
    state = {
        totalCount: 0,
    }
    handleCountChange = (count) => {
        this.setState((prevState) => ({
            totalCount: Math.max(prevState.totalCount + count, 0),
        }));
    }
    render() {
        return (
            <div>
                <div className="counters__container">
                    <Counter onCountChange={this.handleCountChange} />
                    <Counter onCountChange={this.handleCountChange} />
                    <Counter onCountChange={this.handleCountChange} />
                    <Counter onCountChange={this.handleCountChange} />

                </div>
                <div className="total__value">
                    <h4>Total: {this.state.totalCount}</h4>
                </div>

                <div style={{ fontSize: "21px", fontStyle: "italic", textTransform: "uppercase", textDecoration: "underline", color: 'red', }}> `
                    On Every Counter, The Couner Not Be Able To Decrement Under Zero ,Also Total` </div>
            </div>
        );
    }
}

export default Total;
