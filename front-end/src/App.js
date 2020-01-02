import React, { Component } from "react";
import TeamsList from './containers/TeamsList'
import "./App.css";
import PortFolio from "./components/PortFolio";
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowData from "./components/ShowData";

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
      // singleTeam: arg,
      portfolioTeams: [...this.state.portfolioTeams, arg]
    })
  }

  handleTeamCard=(arg)=> {
    console.log("click on card", arg);
    this.setState({singleTeam: arg})
    this.props.history.push("/showdata")
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

  
  handleLogOut=() => {
    console.log("Heelo");
    localStorage.clear()
    this.setState({portfolioTeams: []})
    this.props.history.push('/')
  }

  render() {
    
    return (
      <div className="App">
        {
          <Switch>
            <Route exact path="/teamlist" render={() => <TeamsList teamsData={this.state.teamsData} handleTeamCardClick={this.handleTeamCardClick}/>}/>
            <Route path="/portfolio" render={()=> <PortFolio handleLogOut={this.handleLogOut} portfolioTeams={this.state.portfolioTeams} handleTeamCard={this.handleTeamCard}/>} />
            <Route exact path="/showdata" render={() => <ShowData singleTeam={this.state.singleTeam} handleLogOut={this.handleLogOut}/>}/>
            <Route path="/" render={()=> <Login handleCreateUser={this.handleCreateUser} errorMessag={this.state.errorMessag}/>}/>
          </Switch>
        }
        {/* {<Login />} */}
      </div>
    );
  }
}

export default App;
