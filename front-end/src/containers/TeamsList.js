import React from 'react'
import TeamCard from '../components/TeamCard'

class TeamsList extends React.Component {

    render(){
        console.log(this.props);
        // return("test")
        return ( this.props.teamsData !== null ? this.props.teamsData.map(team => { return <TeamCard team={team} key={team.Name}/>}) : [] )
        
    };
}

export default TeamsList;