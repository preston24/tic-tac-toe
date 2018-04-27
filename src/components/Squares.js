import React, { Component } from 'react';

class Squares extends Component {
  constructor() {
    super();
    
    this.state = {
      marker: null
    }
  }

  onSquareClick =() => {
    this.setState({ marker: this.props.XorO })
    this.props.playerChange()
  }

  render() {
    return (
      <button className="Square" onClick={this.onSquareClick}>{this.props.clicked ? this.state.marker: null}</button>
    )
  }
}

export default Squares;