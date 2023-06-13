import classNames from 'classnames/bind';
import React, { useState } from 'react';
import MyLogo from './MyLogo';
import styles from './title-session.module.scss';
const cx = classNames.bind(styles);
const Title = ({ title }) => {
    return (
        <div className={cx('header')}>
            <div className={cx('logo', 'logo-revert')}>
                <MyLogo fill="#5F8D4E" height="40px" />
            </div>
            <h2 className={cx('title-session', 'title')}>{title}</h2>
            <div className={cx('logo')}>
                <MyLogo fill="#5F8D4E" />
            </div>
        </div>
    );
};

export default Title;
