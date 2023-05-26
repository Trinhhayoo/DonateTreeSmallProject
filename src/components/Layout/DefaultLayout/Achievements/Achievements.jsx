import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Achievements.module.scss';

// import './Achievements.module.scss';
const cx = classNames.bind(styles);

const Achievements = () => {
    return (
        <div className={cx('wrapper')}>
            <p>Achievements</p>
        </div>
    );
};
export default Achievements;
