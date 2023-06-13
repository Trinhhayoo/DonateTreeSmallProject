import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';
import classNames from 'classnames/bind';
import styles from './Achievements.module.scss';
import blob from '../../../../svg/2xblob.svg';
import Title from '../../../GlobalStyles/title-session';

const cx = classNames.bind(styles);

// const data = [
//   { name: "Write, Edit and Run your Javascript code using JS Online Javascript Editor for free", value: 1 },
//   { name: "Stocks", value: 2 },
//   { name: "Real Estate", value: 2 },
//   { name: "Other", value: 4 }
// ];
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
const COLORS = Data.map((data) => data.color);
const renderCustomLabelLine = (props) => {
    const { start, end, stroke, strokeWidth, lineAttribute } = props;
    return (
        <line
            {...lineAttribute}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeDasharray="4"
        />
    );
};
const Achievement = () => (
    <div className={cx('section', 'wrapper')}>
        <div className={cx('title-achieve')}>
            <Title title={'Achievements'} />
        </div>

        <div className={cx('content')}>
            <ResponsiveContainer width="100%" height={450}>
                <PieChart height={250}>
                    <Pie
                        data={Data}
                        cx="50%"
                        cy="50%"
                        // innerRadius={50}
                        outerRadius={150}
                        paddingAngle={0}
                        fill="#8884d8"
                        dataKey="percent"
                        isAnimationActive={true}
                        startAngle={90}
                        endAngle={-450}
                        labelLine={false}
                        label={({
                            cx,
                            cy,
                            midAngle,
                            innerRadius,
                            outerRadius,
                            startAngle,
                            endAngle,
                            fill,
                            payload,
                            percent,
                            value,
                            name,
                            index,
                        }) => {
                            const RADIAN = Math.PI / 180;
                            const radius = 40 + outerRadius;
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);

                            const sin = Math.sin(-RADIAN * midAngle);
                            const cos = Math.cos(-RADIAN * midAngle);
                            const sx = cx + (outerRadius + 0) * cos;
                            const sy = cy + (outerRadius + 0) * sin;
                            const mx = cx + (outerRadius + 60) * cos;
                            const my = cy + (outerRadius + 60) * sin;
                            const ex = mx + (cos >= 0 ? 1 : -1) * 22;
                            const ey = my;
                            const textAnchor = cos >= 0 ? 'start' : 'end';
                            let lines = [];
                            let str = Data[index].label;
                            for (let i = 0; i < str.length; ) {
                                if (str.length > 25) {
                                    for (let j = 25; j >= 0; j--) {
                                        if (str[j] === ' ') {
                                            lines.push(str.substring(0, j));
                                            str = str.substring(j + 1);
                                            break;
                                        }
                                        i = 0;
                                    }
                                } else {
                                    lines.push(str);
                                    break;
                                }
                            }
                            const fontSize = 14;
                            let lineHeight = lines.length;
                            let lineWight = 25;
                            const rectHeight = lines.length * lineHeight;

                            return (
                                <g>
                                    <path
                                        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                                        stroke="#5F8D4E"
                                        fill="none"
                                        strokeWidth="6px"
                                    />
                                    <path
                                        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                                        stroke="white"
                                        fill="none"
                                        strokeWidth="5px"
                                    />

                                    {lines.map((line, i) => (
                                        <>
                                            <rect
                                                x={ex + (cos >= 0 ? 2.5 : -13.5) * 12 - 30}
                                                y={y + (i - lines.length / 2 - 0.2) * 20}
                                                width={200}
                                                height={24}
                                                fill="#A4BE7B" // Background color for label
                                                // rx={10} // Border radius
                                                // ry={10} // Border radius
                                            />
                                            <rect
                                                x={ex + (cos >= 0 ? 2.7 : -13.25) * 12 - 30}
                                                y={
                                                    i === 0
                                                        ? y + (i - lines.length / 2 - 0.2 + 0.1) * 20
                                                        : y + (i - lines.length / 2 - 0.2) * 20
                                                }
                                                width={195}
                                                height={22}
                                                fill="white" // Background color for label
                                                // rx={10} // Border radius
                                                // ry={10} // Border radius
                                            />
                                            <text
                                                key={`label-${i}`}
                                                x={x > cx ? ex + 10 : ex - 10}
                                                y={y + (i - lines.length / 2 + 0.5) * 20}
                                                fill="#285430"
                                                textAnchor={x > cx ? 'start' : 'end'}
                                                dominantBaseline="central"
                                                fontSize={fontSize}
                                                fontFamily="Quicksand"
                                            >
                                                {line}
                                            </text>
                                        </>
                                    ))}
                                </g>
                            );
                        }}
                    >
                        {Data.map((entry, index, value) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <h3 className={cx('title-chart')}>Together, we can really make a big thing to our planets</h3>
        </div>
        <div className={cx('Blob')}>
            <img src={blob} alt="blob1" className={cx('blob', 'blob1')} />
            <img src={blob} alt="blob2" className={cx('blob', 'blob2')} />
        </div>
    </div>
);

export default Achievement;
