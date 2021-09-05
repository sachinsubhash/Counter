import React, { Component } from 'react'

export default class Header extends Reacts.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };

        this.reset = this.reset.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        reset() {
            this.setState ({
                count:0
            });
        }
        increment() {
            this.setState(state =>({
                count: state.count + 1
            }));
        }
        decrement() {
            this.setState(state =>({
                count: state.count - 1
            }));
        }
    }
    render() {
        return (
            <div>
                <button className="inc" onClick={this.increment}>Increment</button>
                <button className="inc" onClick={this.decrement}>Decrement</button>
                <button className="inc" onClick={this.reset}>Reset</button>
            </div>
        );
    }
};
