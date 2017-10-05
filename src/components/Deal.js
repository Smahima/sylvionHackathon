import React, { Component } from "react";
import "../styles/App.css";
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
            </div>
            <button className="deal">Deal</button>
            </div>

        </div>

      )}



  }
