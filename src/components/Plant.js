import React, { Component } from "react";
import "../styles/App.css";
import Deck from "../models/deck.js"

export default class Plant extends Component {
  render() {
    return (

      <div className="card-block">
        <h4 className="card-title">Hand to Play</h4>
          <div className="play">
          <div className="hand"> </div>
          <div className="hand"> </div>
          </div>
          <button className="plant">Plant</button>
      </div>
    );
  }
}
