import React, { Component } from 'react';
import Tree from "../images/tree.jpg";


class Board extends Component {
  render() {
    return (
      <div className="App">
        <header> Sylvion </header>
        <button> New Game </button>

        <div className="board">
          <img src={Tree} alt="cartoon tree"/>
          <div className="card">
          </div>
          <div className="card">
          </div >
          <div className="card">
          </div>
          <div className="card">
          </div>
          <div className= "fireCards">
          </div>
        </div>





      </div>
    );
  }
}

export default Board;
