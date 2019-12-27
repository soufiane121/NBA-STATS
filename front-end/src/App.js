import React, { Component } from "react";
import TeamsList from './containers/TeamsList'
import "./App.css";
import PortFolio from "./components/PortFolio";
// import Chart from 'react-apexchart'

class App extends Component {

  state={
    teamsData: null,
    singleTeam: null
  }
  componentDidMount(){
    fetch('http://localhost:3000/teams')
    .then(resp => resp.json())
    .then(data=> this.setState({teamsData: data}))
  }

  handleTeamCardClick =(arg)=>{
    console.log("from teh app", arg);
    this.setState({
      singleTeam: arg
    })
    
  }
  render() {
    
    return (
      <div className="App">
        { this.state.singleTeam===null 
        ?
        <TeamsList teamsData={this.state.teamsData} handleTeamCardClick={this.handleTeamCardClick}/>
        : 
        <PortFolio singleTeam={this.state.singleTeam}/>
        // <Chart />
        }
      </div>
    );
  }
}

export default App;
