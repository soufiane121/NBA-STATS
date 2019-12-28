 import React from 'react'
 import Chart from "react-apexcharts"

 class PortFolio extends React.Component {

   state={
     options:{
       chart:{color: 'f3f3f3'},
       labels: ["Wins", "Losses"],
       title:{text:`Games played ${this.props.singleTeam.Games}`},
      //  responsive: [{breakpoint: 480}]
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      },
     series: [this.props.singleTeam.Wins, this.props.singleTeam.Losses],
     optionsRebound:{
      plotOptions: {
        radialBar: {
          endAngle: 270,
          hollow: {
            size: '30%',  }, } },

            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
            labels: ['Offensive Rebounds', 'DefensiveRebounds', 'Rebounds'],

            legend: {
              show: true,
              floating: true,
              fontSize: '16px',
              position: 'left',
              offsetX: 160,
              offsetY: 10, },
     },
     seriesRebound: [this.props.singleTeam.OffensiveRebounds, 
      this.props.singleTeam.DefensiveRebounds,
      this.props.singleTeam.Rebounds
    ],
   }
    
//    OffensiveRebounds: 250.4
// DefensiveRebounds: 837.9
// Rebounds: 1088.3

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
                width="500"
              />
             </div>
           </div>
           <div className="row2">
             <div className="mixed-chart2">
             <Chart 
              options={this.state.optionsRebound}
              series={this.state.seriesRebound}
              type="radialBar"
              height="500"
              />
             </div>
           </div>
         </div>
      )
    }
 }

 export default PortFolio