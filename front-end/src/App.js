import React, { Component } from "react";
import TeamsList from './containers/TeamsList'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TeamsList />
      </div>
    );
  }
}

export default App;
