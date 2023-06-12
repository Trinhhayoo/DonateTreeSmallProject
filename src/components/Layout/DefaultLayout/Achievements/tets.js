// setup
// import { useEffect } from 'react';
import React, { Component } from 'react';
// import 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';

// // pieLabelsLine plugin
// function boxText({ text }) {
//     const box = {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         padding: '10px',
//         gap: '10px',
//     };
//     const content = {
//         fontWeight: '500',
//         fontSize: '20px',
//         lineHeight: '25px',

//         color: '#285430',
//     };
//     return (
//         <div style={box}>
//             <p style={content}>{text}</p>
//         </div>
//     );
// }
// const pieLabelsLine = {
//     id: 'pieLabelsLine',
//     afterDraw(chart) {
//         const {
//             ctx,
//             chartArea: { width, height },
//         } = chart;

//         const cx = chart._metasets[0].data[0].x;
//         const cy = chart._metasets[0].data[0].y;

//         const sum = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);

//         chart.data.datasets.forEach((dataset, i) => {
//             chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
//                 const { x: a, y: b } = datapoint.tooltipPosition();

//                 const x = 2 * a - cx;
//                 const y = 2 * b - cy;

//                 // draw line
//                 const halfwidth = width / 2;
//                 const halfheight = height / 2;
//                 const xLine = x >= halfwidth ? x + 20 : x - 20;
//                 const yLine = y >= halfheight ? y + 20 : y - 20;

//                 const extraLine = x >= halfwidth ? 10 : -10;
//                 ctx.beginPath();
//                 ctx.moveTo(x, y);
//                 ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
//                 ctx.fill();
//                 ctx.moveTo(x, y);
//                 ctx.lineTo(xLine, yLine);
//                 ctx.lineTo(xLine + extraLine * 3, yLine);
//                 // ctx.strokeStyle = dataset.backgroundColor[index];
//                 const gradient = ctx.createLinearGradient(0, 0, 0, 10);
//                 gradient.addColorStop('0', '#5F8D4E');
//                 gradient.addColorStop('0.16', '#5F8D4E');
//                 gradient.addColorStop('0.84', 'white');
//                 ctx.lineWidth = 4;
//                 ctx.strokeStyle = gradient;
//                 ctx.strokeText('', 10, 50);
//                 ctx.stroke();
//                 ctx.font = '20px Arial';
//                 // control the position
//                 const textXPosition = x >= halfwidth ? 'left' : 'right';
//                 const plusFivePx = x >= halfwidth ? 5 : -5;
//                 ctx.fillStyle = '#ffcc00';
//                 ctx.textAlign = textXPosition;
//                 ctx.textBaseline = 'middle';
//                 ctx.fillStyle = '#285430';
//                 ctx.fillText(chart.data.labels[index], xLine + extraLine * 3 + plusFivePx, yLine);
//             });
//         });
//     },
// };

class Chart extends Component {
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

    // const Achievements = () => {
    //     const [data, setData] = useState({});

    //     const newData = {
    //         chartData: {
    //             labels: Data.map((data) => data.label),

    //             // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    //             datasets: [
    //                 {
    //                     data: Data.map((data) => data.percent),
    //                     // you can set indiviual colors for each bar
    //                     backgroundColor: Data.map((data) => data.color),
    //                     borderWidth: 1,
    //                 },
    //             ],
    //         },
    //     };

    //     alert(newData.chartData.labels);

    render() {
        return (
            <div>
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
                            position: 'right',
                        },
                    }}
                />
            </div>
            // <h2>Hello</h2>
        );
    }
}

export default Chart;
