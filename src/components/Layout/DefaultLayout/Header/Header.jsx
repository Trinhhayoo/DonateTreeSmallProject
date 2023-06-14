import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import blob from '../../../../svg/2xblob.svg';
import earth from '../../../../svg/2xearth.svg';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div id="header" className={cx('section')}>
            {/* <section> */}
            <div className={cx('hero-banner-container', 'row')}>
                <div className={cx('blob', 'col-lg-6', 'col-sm-12')}>
                    <img src={blob} alt="" />
                    <div className={cx('centered')}>
                        <h3 className={cx('blobTitle')}>Making a positive impact on the environment</h3>
                        <p className={cx('blobContent')}>
                            Join us in creating a greener future by donating towards tree planting projects.
                        </p>
                        <a href="#form">
                            <button className={cx('btn-join')}>Join us now!</button>
                        </a>
                    </div>
                </div>

                <div className={cx('earth', 'col-lg-6', 'col-sm-12')}>
                    <div className={cx('earthImage')}>
                        <img src={earth} className={cx('earth-img')} />
                    </div>

                    <div>
                        <p className={cx('earthContent')}>More than 3000 trees planted among 30 cities</p>
                    </div>
                </div>
            </div>
            {/* </section> */}
        </div>
    );
};
export default Header;
