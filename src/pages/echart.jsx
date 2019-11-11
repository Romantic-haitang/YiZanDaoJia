import React, { Component } from 'react';
import ReactHighcharts from'react-highcharts';

class Chart extends Component {
    constructor(){
        super();
    }
    render(){
        var config = {
            // 标题
            title: {
                text: 'line'
            },
            // credits:{
            //     enabled:false
            // },
            xAxis:{
                categories:['08.05','08.06','08.07','08.09','08.10','08.11','08.12']
            },
            series: [{
                data: [43934, 52503, 57177, 69658]
            }, {
                data: [24916, 24064, 29742, 29851]
            }, {
                data: [11744, 17722, 16005, 19771]
            }],
            };   
        return(
            <div>
                <ReactHighcharts config={config} />
            </div>
        )
    }
}


export default  Chart