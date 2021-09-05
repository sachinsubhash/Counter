import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (name) => {
    this.setState ({
      input: name.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Full Nane</h1>
        <input value={this.state.input} onChange={this.handleChange} />
        <h1>Name: {this.state.input}</h1>
      </div>
    )
  }
}
