import React from 'react'
import Chart from 'react-apexcharts'

class ShowData extends React.Component {

    state={
        obj:this.props.singleTeam,
        options:{
          chart:{color: 'f3f3f3'},
          labels: ["Wins", "Losses"],
          title:{text:`Games played ${this.props.singleTeam.Games}`,
          style: {
           fontSize:  '14px',
           color:  '#4dc0ae'
         },
        },
       
         },
         colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
         legend: {
           show: true,
           floating: true,
           fontSize: '18px',
           labels: {
             colors: "#4dc0ae"
           },
          },
         // },
        series: [this.props.singleTeam.Wins, this.props.singleTeam.Losses],
        optionsRebound:{
         plotOptions: {
           radialBar: {
             endAngle: 270,
             hollow: {size: '30%'}, 
           } 
         },
         colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
         labels: ['Offensive Rebounds', 'DefensiveRebounds', 'Rebounds'],
   
               legend: {
                 show: true,
                 floating: true,
                 fontSize: '13px',
                 position: '',
                 offsetX: 160,
                 offsetY: 20,
                 labels: {
                   colors: "#4dc0ae"
                 },
               }
        },
        seriesRebound: [this.props.singleTeam.OffensiveRebounds, 
         this.props.singleTeam.DefensiveRebounds,
         this.props.singleTeam.Rebounds
       ],
   
       optionsThree: {
         colors: ['#008FFB','#00E396','#FEB019', '#FF4560','#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
         plotOptions: {
           bar: {
             columnWidth: '45%',
             distributed: true
           }
         },
         dataLabels: {
           enabled: false
         },
         xaxis: {
           categories: ['Assists', 'Steals','Two Pointers Made', 'Two Pointers Attempted',"Three Pointers Made",'Three Pointers Attempted',"Free Throws Made", 'Free Throws Attempted'],
           labels: {
             style: {
               colors: ['#008FFB','#00E396','#FEB019', '#FF4560','#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
               fontSize: '16px'
             }
           }
         }
       },
       legend: {
         position: 'top'
       },
       seriesThree: [
         {
           data: [
             this.props.singleTeam.Assists,
             this.props.singleTeam.Steals,
             this.props.singleTeam.TwoPointersMade,
             this.props.singleTeam.TwoPointersAttempted,
             this.props.singleTeam.ThreePointersMade,
             this.props.singleTeam.ThreePointersAttempted,
             this.props.singleTeam.FreeThrowsMade,
             this.props.singleTeam.FreeThrowsAttempted
           ]
         }
       ]
     }
      
       
   
       render(){
         console.log(this.props.routerProps)
           return(
             <div id="full-page">
               <div className="nav-bar"> Test</div>
             <div className="row">
               <div className="mixed-chart">
                 <Chart
                   options={this.state.options}
                   series={this.state.series}
                   type="donut"
                   width="400" />
                </div>
              </div>
             {/* </div> */}
             {/* // <div className ="second-one"> */}
              <div className="row2">
                <div className="mixed-chart2">
                <Chart 
                 options={this.state.optionsRebound}
                 series={this.state.seriesRebound}
                 type="radialBar"
                 height="250"
                 width="400"
                 />
                </div>
              </div>
              <div className="row3">
                <div className="mixed-chart3">
                <Chart 
                 options={this.state.optionsThree}
                 series={this.state.seriesThree}
                 type="bar"
                 height="390"
                 width="500"
                 />
                </div>
              </div>
            </div>
           )
       }
}

export default ShowData;