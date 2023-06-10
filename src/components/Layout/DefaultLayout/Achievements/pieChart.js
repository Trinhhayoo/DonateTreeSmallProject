// import { Chart, ArcElement } from 'chart.js';

import React, { Component } from 'react';
// import 'chart.js';
import { Chart, ArcElement } from 'chart.js';
// import 'chartjs-plugin-piechart-outlabels';
import { Pie } from 'react-chartjs-2';
// import url
Chart.register(ArcElement);

// function PieChart(props) {

class chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
        };
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City',
    };
    //     // const chartData = props.chartData;
    render() {
        return (
            //             // <Pie
            //             //     type={'outlabeledPie'}
            //             //     data={data}
            //             //     options={{
            //             //         // title: {
            //             //         //     display: true,
            //             //         //     text: 'Users Gained between 2016-2020',
            //             //         // },
            //             //         // plugins: {
            //             //         zoomOutPercentage: 90,
            //             //         title: {
            //             //             display: true,
            //             //             text: 'Users Gained between 2016-2020',
            //             //         },
            //             //         outlabels: {
            //             //             text: '%l %p',
            //             //             color: 'black',
            //             //             stretch: 35,
            //             //             font: {
            //             //                 resizable: true,
            //             //                 minSize: 12,
            //             //                 maxSize: 18,
            //             //             },
            //             //         },
            //             //         // },
            //             //     }}
            //             // />
            <div className="chart">
                <Pie
                    data={this.state.chartData}
                    options={{
                        zoomOutPercentage: 90,
                        title: {
                            display: this.props.displayTitle,
                            text: 'Exchangables ' + this.props.location,
                            fontSize: 25,
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                        },
                    }}
                />
            </div>
            // <h2>Hello</h2>
        );
    }
}

// // }

export default chart;
