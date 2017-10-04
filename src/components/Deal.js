import React, { Component } from "react";
import "../styles/App.css";

export default class Deal extends Component {
  render() {
    return (
      <div className="defense">
        <div className="card-block">
          <h4 className="card-title">Discard Pile</h4>
          <div className="discard" />
        </div>
        <div className="card-block">
          <h4 className="card-title">Defense Deck</h4>
          <div className="deck" />
          <button className="deal">Deal</button>
        </div>
        <div className="card-block">
          <h4 className="card-title">Hand to Play</h4>
          <div className="play" />
          <div className="play" />
          <button className="plant">Plant</button>
        </div>
      </div>
    );
  }
}
