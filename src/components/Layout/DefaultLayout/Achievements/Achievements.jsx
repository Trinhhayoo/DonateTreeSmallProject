import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Achievements.module.scss';
import blob from '../../../../svg/2xblob.svg';
import plantTree from '../../../../svg/plantTree.svg';

const cx = classNames.bind(styles);

const Achievements = () => {
    return (
        <div id="achievements" className={cx('wrapper')}>
            <h2 className={cx('title-session')}>Achievements</h2>
            <div className={cx('Blob')}>
                <img src={blob} alt="blob1" className={cx('blob', 'blob1')} />
                <img src={blob} alt="blob2" className={cx('blob', 'blob2')} />
                <div className={cx('plantTree')}>
                    <img src={plantTree} alt="plant human" />
                </div>
                <div className={cx('content')}></div>
            </div>
        </div>
    );
};
export default Achievements;
