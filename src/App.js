import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState ({
      count: this.state.count + 5
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increment} className="increasenumber">Increase</button>
        <h1>Count: {this.state.count}</h1>
      </div>
    )
  }
}
