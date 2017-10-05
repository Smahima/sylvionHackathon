import React, { Component } from "react";
import "../styles/App.css";
import treeCard from "../images/treeCard.jpg";
import Deck from "../models/deck.js"




export default class Deal extends Component {
  render() {
    return (

      <div className="defense">

        <div className="card-block">
          <h4 className="card-title">Discard Pile</h4>
          <div className="discard" >
          </div>
        </div>


          <div className="card-block">
            <h4 className="card-title">Defense Deck</h4>
            <div className="deck">
            <img src={treeCard} alt="Fire Deck" height="250" width="150"/>
            </div>
            <button className="deal">Deal</button>
            </div>
            <div className="playerHand">
            <h4 className="card-title">Your Hand</h4>
            <div className="hand">
            <img src={treeCard} alt="Fire Deck" height="250" width="150"/></div>
            <button className="plant">Plant</button>
            </div>
            <div className="playerHand">
            <h4 className="card-title">Your Hand</h4>
            <div className="hand"> <img src={treeCard} alt="Fire Deck" height="250" width="150"/></div>

            </div>

        </div>

      )}



  }
