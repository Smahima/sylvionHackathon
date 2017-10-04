import React, { Component } from 'react';
import '../styles/App.css';

export default class Deal extends Component {

  render() {

  let defense = {
    display: "flex",
    border:"5px solid green"
  }

  let discard = {
    border: "1px dotted grey",

  }

  let deck = {
    border: "1px solid blue 20%",
    marginLeft: "10px",
  }

  let play = {
    border: "1px solid orange 20%",
    marginLeft: "10px",
  }


    return (
        <div style={defense} className="defense">

            <div style={discard} className="discard">
              <div className="card-block">
                <h4 className="card-title">Discard Pile</h4>
              </div>
            </div>

            <div style={deck} className="deck">
              <div className="card-block">
              <h4 className="card-title">Defense Deck</h4>
              </div>

              <div>
                <button className="deal">Deal</button>
              </div>
            </div>

            <div style={play} className="play">
              <div className="card-title">Hand to Play
                <div className="card-block">

                  <div className="hand">
                </div>
                
                </div>
              </div>

              <div>
                <button className="plant">Plant</button>
              </div>
            </div>

        </div>

      );
    };
  }
