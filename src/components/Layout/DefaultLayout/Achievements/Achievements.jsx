import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Achievements.module.scss';
import blob from '../../../../svg/2xblob.svg';
import plantTree from '../../../../svg/plantTree.svg';
import PieChart from './pieChart';
import Title from '../../../GlobalStyles/title-session';
const cx = classNames.bind(styles);
const Data = [
    {
        label: 'Percentages of trees planted in Dong Nai reaches 20% total',
        percent: 20,
        color: '#00C0CF',
    },
    {
        label: 'Other provinces account for 4% of the donation',
        percent: 4,
        color: '#A07B4A',
    },
    {
        label: 'Percentages of trees planted in Tay Ninh reaches 18% total',
        percent: 18,
        color: '#A4BE7B',
    },
    {
        label: 'Percentages of trees planted in Binh Phuoc reaches 23% total',
        percent: 23,
        color: '#5F8D4E',
    },
    {
        label: 'Soc Trang has the highest percentages of trees donation, which is up to 35%',
        percent: 35,
        color: '#299BCB',
    },
];
// const Achievements = () => {

class Achievements extends React.Component {
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
                labels: Data.map((data) => data.label),

                // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
                datasets: [
                    {
                        data: Data.map((data) => data.percent),
                        // you can set indiviual colors for each bar
                        backgroundColor: Data.map((data) => data.color),
                        borderWidth: 1,
                    },
                ],
            },
        });
    }
    render() {
        return (
            <div className={cx('section', 'wrapper')}>
                <div className={cx('title-achieve')}>
                    <Title title={'Achievements'} />
                </div>
                <div className={cx('content')}>
                    <div className={cx('chart')}>
                        <PieChart
                            chartData={this.state.chartData}
                            location=""
                            legendPosition="bottom"
                            type="outlabeledDoughnut"
                            options={{ zoomOutPercentage: 90 }}
                        />
                    </div>
                </div>
                <div className={cx('Blob')}>
                    <img src={blob} alt="blob1" className={cx('blob', 'blob1')} />
                    <img src={blob} alt="blob2" className={cx('blob', 'blob2')} />
                </div>
            </div>
        );
    }
}
export default Achievements;
