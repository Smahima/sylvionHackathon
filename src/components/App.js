import React, { Component } from 'react';
import '../styles/App.css';
import Deal from "../components/Deal.js"
import Board from "../components/Board.js"
import Plant from "../components/Plant.js"

class App extends Component {
  render() {
    return (
      <div className="App">

      <div>
        <Board />
        <Deal />
      </div>

      {this.props.children}

      </div>
    );
  }
}

export default App;
