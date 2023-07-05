import { Component } from "react";
import './style.css';
class Counter extends Component {

    state = {
        counter: 0,
    }

    handleDecrement = () => {
        this.setState((prevState) => (
            { counter: prevState.counter !== 0 ? prevState.counter - 1 : 0 }),
            () => this.props.onCountChange(-1)
        );
    }

    handleIncrease = () => {
        this.setState(
            (prevState) => ({ counter: prevState.counter + 1, }),
            () => this.props.onCountChange(+1)
        );
    }

    render() {
        return (<div>
            <div className="container">
                <span className="counter__value"> {this.state.counter} </span>
                <button className="decrement_counter__btn" onClick={this.handleDecrement}> - </button>
                <button className="increment_counter__btn" onClick={this.handleIncrease}> + </button>
            </div>
        </div>);
    }
}

export default Counter;
