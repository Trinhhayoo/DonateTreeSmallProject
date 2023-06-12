import React, { Component } from 'react';
// import 'chartjs-plugin-piechart-outlabels';
import { Bar, Line, Pie } from 'react-chartjs-2';

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

    render() {
        return (
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
        );
    }
}

// export default Chart;

class CC extends React.Component {
    constructor() {
        super();
        this.state = {
            chartData: {},
        };
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['E-3', 'B-52', 'B-1', 'E-6', 'KC-135'],
                datasets: [
                    {
                        label: 'number of aircraft',
                        data: [617594, 181045, 153060, 106519, 105162, 95072], //fake data
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                        ],
                    },
                ],
            },
        });
    }

    render() {
        return (
            <div className="App" style={{ height: '120px' }}>
                <Chart
                    chartData={this.state.chartData}
                    location=""
                    legendPosition="bottom"
                    type="outlabeledDoughnut"
                    options={{ zoomOutPercentage: 90 }}
                />
            </div>
        );
    }
}

export default CC;
