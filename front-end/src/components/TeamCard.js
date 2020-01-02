import React from 'react'
const images = require.context('../../photos')
const TeamCard= (props) => (
    // teamImg = images`/${props.team,Team}`
    //  <div className="container">
        <div className="card-main" onClick={()=> props.handleTeamCardClick(props.team, `./${props.team.Team}.jpg`)}>
            <div className="card-box">
              <img className="img-card" src={images(`./${props.team.Team}.jpg`)} alt={props.team.Name}/>
              <h4>{props.team.Name}</h4>
              
            </div>
        </div>
        

)
export default TeamCard;