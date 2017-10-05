import React, { Component } from 'react';
import Tree from "../images/tree.jpg";
import fireCard from "../images/fireCard.jpg";
import FireDeck from '../models/deck.js';
// import SylvanDeck from '../models/sylvanDeck.js';




export default class Board extends Component {
  render() {
    console.log(FireDeck.shuffleDeck())
    return (
      <div className="App">
        <h1> Sylvion </h1>

      <button type="submit" >New Game</button>


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
