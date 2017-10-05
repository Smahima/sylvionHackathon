import React, { Component } from 'react';
import Tree from "../images/tree.jpg";
import fireCard from "../images/fireCard.jpg";
import FireDeck from '../models/deck.js';
import fire from '../images/fire1.png';

// import SylvanDeck from '../models/sylvanDeck.js';
let fireDeckArray;
let board = [];
let cards;
fireDeckArray = FireDeck.shuffleDeck();
console.log("firedeck", fireDeckArray);




function newGame(e) {
  board.push(fireDeckArray[0]);
  fireDeckArray.shift();
  console.log("board",board);
  console.log("board",board[0].image);


 cards = <p> {board[0].cardName}</p>
 console.log("board[0].cardName", cards);
  cards = board.map((card, index) => {
          return (
            <div key={index} >
              <p> {card.cardName}</p>
            </div>

          )
        })
}


console.log("outside",cards)
export default class Board extends Component {

  render() {
    cards = board.map((card, index) => {
            return (
              <div key={index} >
                <p>{card.cardName}</p>
              </div>

            )
          })

return (
      <div className="App">
        <h1> Sylvion </h1>


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
          <img src={fire} alt="Fire Deck" height="250" width="150"/>
          </div>
          <div className= "fireCards">
          <img src={fireCard} alt="Fire Deck" height="250" width="150"/>
          </div>
        </div>


      </div>
    );
}
  }
