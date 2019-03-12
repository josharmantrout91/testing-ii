import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0
    };

    countStrike = () => {
      if (this.state.strikes === 2) {
        this.setState({ balls: 0, strikes: 0 });
      } else {
        this.setState({ strikes: this.state.strikes + 1 });
      }
    };

    countBall = () => {
      if (this.state.balls === 3) {
        this.setState({ balls: 0, strikes: 0 });
      } else {
        this.setState({ balls: this.state.balls + 1 });
      }
    };

    countFoul = () => {
      if (this.state.strikes < 2) {
        this.setState({ strikes: this.state.strikes + 1 });
      }
    };

    countHit = () => {
      this.setState({ balls: 0, strikes: 0 });
    };
  }
  render() {
    return (
      <div className="App">
        <h2>Score Board</h2>
        <Dashboard />
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </div>
    );
  }
}

export default App;
