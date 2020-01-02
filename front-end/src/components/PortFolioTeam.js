import  React from 'react'
import PortFolio from './PortFolio'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const images = require.context('../../photos')


class PortFolioTeam extends React.Component {

    render(){
        return(
            <Card style={{ width: '15rem', display: 'inline-flex', height: "20%", margin: "20px"}}>
            <Card.Img variant="top" src={images(`./${this.props.teamm.Team}.jpg`)} alt={this.props.teamm.Name}/>
            <Card.Body>
            <Card.Title>{this.props.teamm.Name}</Card.Title>
              <Button variant="primary">Check Stats</Button>
            </Card.Body>
          </Card>
        
        )
    }
}


export default PortFolioTeam;