import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Achievements.module.scss';
import blob from '../../../../svg/2xblob.svg';
import Title from '../../../GlobalStyles/title-session';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

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

const Achievements = () => {
    const data01 = [
        { name: 'Percentages of trees planted in Dong Nai reaches 20% total', value: 20 },
        { name: 'Other provinces account for 4% of the donation', value: 4 },
        { name: 'Percentages of trees planted in Tay Ninh reaches 18% total', value: 18 },
        { name: 'Percentages of trees planted in Binh Phuoc reaches 23% total', value: 23 },
        { name: 'Soc Trang has the highest percentages of trees donation, which is up to 35%', value: 35 },
        // { name: 'Group F', value: 189 },
    ];
    const data02 = [{ name: Data.map((data) => data.label), value: Data.map((data) => data.percent) }];
    if (data01 === data02) console.log('2');
    // alert(typeof data02.map((data) => data.name)[0] + typeof data01.map((data) => data.name));
    alert(data02.map((data) => data.name)[0]);
    for (let temp in data02.map((data) => data.name)) {
        alert(temp);
    }
    return (
        <div className={cx('section', 'wrapper')}>
            <div className={cx('title-achieve')}>
                <Title title={'Achievements'} />
            </div>

            <div className={cx('content')}>
                <div className={cx('box-chart')}>
                    <p className={cx('box-chart-text')}></p>
                </div>
                <div>
                    <div className={cx('chartBox')}>
                        {/* <Chart
                                chartData={newData}
                                location=""
                                legendPosition="bottom"
                                type="outlabeledDoughnut"
                                options={{ zoomOutPercentage: 90 }}
                            /> */}
                        <PieChart width={1000} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx={200}
                                cy={200}
                                outerRadius={80}
                                // fill=
                                label
                            />
                            <Tooltip />
                        </PieChart>
                        <h3 className={cx('title-chart')}>Together, we can really make a big thing to our planets</h3>
                    </div>
                </div>
            </div>
            <div className={cx('Blob')}>
                <img src={blob} alt="blob1" className={cx('blob', 'blob1')} />
                <img src={blob} alt="blob2" className={cx('blob', 'blob2')} />
            </div>
        </div>
    );
};
export default Achievements;
