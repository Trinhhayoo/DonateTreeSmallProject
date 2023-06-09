import React, { useState } from 'react';
import blob from '../../../../svg/2xblob.svg';
import earth from '../../../../svg/2xearth.svg';
import styles from './Header.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div id="header">
            <section>
                <div className="hero-banner-container">
                    <div className="blob">
                        <img src={blob} />
                        <div className="centered">
                            <h3 id="blobTitle">Making a positive impact on the environment</h3>
                            <p id="blobContent">
                                Join us in creating a greener future by donating towards tree planting projects.
                            </p>
                            <a href="#form">
                                <button
                                    className={cx('btn-join', 'btn')}
                                    style={{
                                        width: '231px',
                                        height: '82px',
                                        color: '#5F8D4E',
                                        margin: '0px',

                                        transform: 'translate(50%, 0px)',
                                    }}
                                >
                                    Join us now!
                                </button>
                            </a>
                        </div>
                    </div>

                    <div id="earth">
                        <div id="earthImage">
                            <img src={earth} />
                        </div>

                        <div>
                            <p id="earthContent">More than 3000 trees planted among 30 cities</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Header;
