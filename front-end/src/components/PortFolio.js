 import React from 'react'
 import Chart from "react-apexcharts"

 class PortFolio extends React.Component {

   state={
     options:{},
     series: [this.props.singleTeam.Wins, this.props.singleTeam.Losses],
   }
    

    render(){
        return(
          <div id="full-page">
            <div className="nav-bar"> Test</div>
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                width="300"
                
              />
             </div>
           </div>
         </div>
      )
    }
 }

 export default PortFolio