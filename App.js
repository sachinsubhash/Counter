import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count:5
    }
  }
  
  increment = () => {
    this.setState ({
      count: count + 5
    })
  }
  decrement = () {
    this.setState ({
      count: count - 5
    })
  }

render() {
  return (
    <div ClassName="App">
        <button onClick={this.increment} className="increase">Increment</button>
        <button onClick={this.decrement} className="decrease">Decrement</button>
        <h1>Count: {this.state.count}</h1>
    </div>
