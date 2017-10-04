import React, { Component } from 'react';
import Tree from "../images/tree.jpg";
import fireCard from "../images/fireCard.jpg";


// when click submit, pu
class Board extends Component {
  render() {
    return (
      <div className="App">
        <header> Sylvion </header>
        <button onSubmit=""> New Game </button>

        <div className="board">
          <img src={Tree} alt="cartoon tree"/>
          <div className="card" id="slot1">
          </div>
          <div className="card" id="slot2">
          </div >
          <div className="card" id="slot3">
          </div>
          <div className="card" id="slot4">
          </div>
          <div className= "fireCards">
          <img src={fireCard} alt="Fire Deck" height="250" width="150"/>
          </div>
        </div>


      </div>
    );
  }
}

export default Board;
