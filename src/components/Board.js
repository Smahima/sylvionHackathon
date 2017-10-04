import React, { Component } from 'react';


class Board extends Component {
  render() {
    return (
      <div className="App">
        <header> Sylvion </header>
        <button> New Game </button>

        <div className="board">
          <div className="card">
          </div>
          <div className="card">
          </div >
          <div className="card">
          </div>
          <div className="card">
          </div>
        </div>



        <div className= "fireCards">
        </div>

      </div>
    );
  }
}

export default Board;
