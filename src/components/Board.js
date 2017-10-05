import React, { Component } from 'react';
import Tree from "../images/tree.jpg";
import fireCard from "../images/fireCard.jpg";
import FireDeck from '../models/deck.js';
// import SylvanDeck from '../models/sylvanDeck.js';

let fireDeckArray;
let board = [];
let cards;


function newGame(e) {
  FireDeck.resetDeck()
  fireDeckArray = FireDeck.shuffleDeck()
  board[0] = fireDeckArray.shift()
  console.log(fireDeckArray)
  console.log("board",board);

  console.log("map board", board);
  // cards = board.map((card, index) => {
  //         return (
  //           <div key={index} >
  //             <p> test</p>
  //           </div>
  //
  //         )
  //       })
}

export default class Board extends Component {

  render() {

 const cards = board.power


    return (
      <div className="App">
        <h1> Sylvion </h1>
        {cards}

      <button type="submit" onClick={newGame}>New Game</button>


        <div className="board">
          <img src={Tree} alt="cartoon tree"/>
          <div className="card" id="slot1">
          </div>
          <div className="card" id="slot2">
          </div >
          <div className="card" id="slot3">
          </div>
          <div className="card" id="slot4">
          {cards}
          </div>
          <div className= "fireCards">
          <img src={fireCard} alt="Fire Deck" height="250" width="150"/>
          </div>
        </div>


      </div>
    );
      }
  }
