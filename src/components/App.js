import React, { Component } from 'react';
import '../styles/App.css';
import Deal from "../components/Deal.js"

class App extends Component {
  render() {
    return (
      <div className="App">

      <div>
        <Deal />
      </div>

      {this.props.children}

      </div>
    );
  }
}

export default App;
