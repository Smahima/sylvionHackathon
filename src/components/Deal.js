import React, { Component } from 'react';
import '../styles/App.css';

export default class Deal extends Component {

  render() {

    return (
        <div className="defense">

            <div  className="discard">
              <div className="card-block">
                <h4 className="card-title">Discard Pile</h4>
              </div>
            </div>

            <div className="deck">
              <div className="card-block">
              <h4 className="card-title">Defense Deck</h4>
              </div>
              <div>
                <button className="deal">Deal</button>
              </div>
            </div>

              <div className="play">
              <div className="card-block">Hand to Play</div>
              <div>
                <button className="plant">Plant</button>
              </div>
            </div>

        </div>

      );
    };
  }
