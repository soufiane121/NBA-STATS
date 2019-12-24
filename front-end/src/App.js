import React, { Component } from "react";
import TeamsList from './containers/TeamsList'
import "./App.css";

class App extends Component {

  state={
    teamsData: null
  }
  componentDidMount(){
    fetch('http://localhost:3000/teams')
    .then(resp => resp.json())
    .then(data=> this.setState({teamsData: data}))
  }
  render() {
    
    return (
      <div className="App">
        <TeamsList teamsData={this.state.teamsData}/>
      </div>
    );
  }
}

export default App;
