import React, { Component } from "react";
import TeamsList from './containers/TeamsList'
import "./App.css";
import PortFolio from "./components/PortFolio";
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// import Chart from 'react-apexchart'

class App extends Component {

  state={
    teamsData: null,
    singleTeam: null,
    errorMessag: null,
    currentUser: null,
    portfolioTeams: []
  }
  componentDidMount(){
    fetch('http://localhost:3000/teams')
    .then(resp => resp.json())
    .then(data=> this.setState({teamsData: data}))
  }

  handleTeamCardClick =(arg)=>{
    this.props.history.push("/portfolio")
    this.setState({
      singleTeam: arg,
      portfolioTeams: [...this.state.portfolioTeams, arg]
    })
  }

  handleCreateUser=(e)=>{
    e.preventDefault()
    e.persist()
    console.log(e);
    fetch("http://localhost:3000/users",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_name: e.target[0].value,
        password: e.target[1].value  
      })})
        .then(resp=> resp.json())
        .then(data => {
          if (data.error === "failed") {
            this.setState({errorMessag: "Try again"})
          } else {
            this.setState({currentUser: data},() => {localStorage.user_id = this.state.currentUser.id})
            this.props.history.push("/teamlist")
          }
        } 
        )
      }

  render() {
    console.log(this.state.teamsData);
    
    return (
      <div className="App">
        {
          <Switch>
            <Route  exact path="/teamlist" render={() => <TeamsList teamsData={this.state.teamsData} handleTeamCardClick={this.handleTeamCardClick}/>}/>
            <Route path="/portfolio" render={()=> <PortFolio singleTeam={this.state.singleTeam} portfolioTeams={this.state.portfolioTeams}/>} />
            <Route path="/" render={()=> <Login handleCreateUser={this.handleCreateUser} errorMessag={this.state.errorMessag}/>}/>
          </Switch>
        }
        {/* {<Login />} */}
      </div>
    );
  }
}

export default App;
