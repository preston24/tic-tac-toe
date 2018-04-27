import React, { Component } from 'react';
import './App.css';
import Squares from './components/Squares';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        XorO: null,
        clicked: false
      }
    }

    componentDidMount=() => {
      this.setState({ XorO: "X", player1: true })
    }

    handlePlayerChange=(id) => {
      if (this.state.XorO === "X") {
        this.setState({ XorO: "O" })
      } else {
        this.setState({ XorO: "X" })
      }
      this.setState({ clicked: true })
    }

    handleReset=() => {
      this.setState({ clicked: false })
    }


  render() {
    return (
      <div className="App">
          <h1>Rikitikitavi, Bitch!</h1>

        <div className="Top-row">
          <Squares playerChange={this.handlePlayerChange} XorO={this.state.XorO} clicked={this.state.clicked}/>
          <Squares playerChange={this.handlePlayerChange} XorO={this.state.XorO} clicked={this.state.clicked}/>
          <Squares playerChange={this.handlePlayerChange} XorO={this.state.XorO} clicked={this.state.clicked}/>
        </div>
        <div className="row">
          <Squares playerChange={this.handlePlayerChange} XorO={this.state.XorO} clicked={this.state.clicked}/>
          <Squares playerChange={this.handlePlayerChange} XorO={this.state.XorO} clicked={this.state.clicked}/>
          <Squares playerChange={this.handlePlayerChange} XorO={this.state.XorO} clicked={this.state.clicked}/>
        </div>
        <div className="Bottom-row">
          <Squares playerChange={this.handlePlayerChange} XorO={this.state.XorO} clicked={this.state.clicked}/>
          <Squares playerChange={this.handlePlayerChange} XorO={this.state.XorO} clicked={this.state.clicked}/>
          <Squares playerChange={this.handlePlayerChange} XorO={this.state.XorO} clicked={this.state.clicked}/>
        </div>

        <button className="reset-button" onClick={this.handleReset}>Reset</button>

      </div>
    );
  }
}

export default App;
