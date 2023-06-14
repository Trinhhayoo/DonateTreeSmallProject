import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../../../svg/2xlogo.svg';
import blob from '../../../../svg/2xblob.svg';
import plant1 from '../../../../image/about1.jpg';
import plant2 from '../../../../image/about2.jpg';
import plant3 from '../../../../image/about3.jpg';
import numList1 from '../../../../svg/numList_1.svg';
import numList2 from '../../../../svg/numList_2.svg';
import numList3 from '../../../../svg/numList_3.svg';
import numList4 from '../../../../svg/numList_4.svg';
import numList5 from '../../../../svg/numList_5.svg';
import Title from '../../../GlobalStyles/title-session';
import styles from './AboutUs.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const AboutUs = () => {
    return (
        <div>
            {/* <section className={cx('section')}> */}
            <div className={cx('section', 'aboutUs')}>
                <div className={cx('title-achieve')}>
                    <Title title={'About us'} />
                </div>
                <div>
                    <img className={cx('rightBlob', 'achieve')} alt="" src={blob} />
                    <div className={cx('section', 'row', 'content')}>
                        <p className={cx('aboutUsContent')}>
                            Welcome to GreenGrow, an online platform dedicated to making a positive impact on the
                            environment by supporting tree planting initiatives. Our mission is to create a greener
                            future by facilitating the donation of funds towards tree planting projects.
                        </p>
                        <p className={cx('aboutUsContent')}>
                            At GreenGrow, we understand the critical role trees play in mitigating climate change,
                            conserving biodiversity, and improving air and water quality. By planting trees, we can
                            combat deforestation, restore ecosystems, and create sustainable environments for future
                            generations.
                        </p>
                    </div>
                    <img className={cx('leftBlob')} src={blob} alt="" />
                </div>
            </div>
            <div className={cx('section', 'list-image')}>
                <ul className={cx('imageContainer')}>
                    <li>
                        <img className={cx('plant')} src={plant1} alt="" />
                    </li>
                    <li cx>
                        <img className={cx('plant')} src={plant2} alt="" />
                    </li>
                    <li cx>
                        <img className={cx('plant')} src={plant3} alt="" />
                    </li>
                </ul>
            </div>
            {/* </section>' */}

            <section className={cx('section', 'coreValues')}>
                <div className={cx('title-core-value')}>
                    <Title title={'Core values'} />
                </div>
                <img className={cx('right-blob-core-value')} alt="" src={blob} />
                <img className={cx('left-blob-core-value')} alt="" src={blob} />
                <div className={cx('content-core-value')}>
                    <div className={cx('coreValuesContainer')}>
                        <div className="numBlob">
                            <img src={numList1} alt="" />
                        </div>

                        <div>
                            <h4 className={cx('coreValuesTitle')}>Explore Tree Planting Projects</h4>
                            <p className={cx('coreValuesContent')}>
                                Discover a wide range of tree planting initiatives around the world. We partner with
                                reputable organizations and local communities to ensure transparency, accountability,
                                and long-term sustainability.
                            </p>
                        </div>
                    </div>

                    <div class={cx('coreValuesContainer')}>
                        <div className={cx('numBlob')}>
                            <img alt="" src={numList2} />
                        </div>

                        <div>
                            <h4 className={cx('coreValuesTitle')}>Donate Towards Tree Planting</h4>
                            <p className={cx('coreValuesContent')}>
                                Select a tree planting project that resonates with you and make a donation directly
                                through our secure online platform. You can choose to contribute a one-time donation or
                                set up recurring donations to support ongoing efforts.
                            </p>
                        </div>
                    </div>

                    <div class={cx('coreValuesContainer')}>
                        <div className={cx('numBlob')}>
                            <img alt="" src={numList3} />
                        </div>

                        <div>
                            <h4 className={cx('coreValuesTitle')}>Track the Impact</h4>
                            <p className={cx('coreValuesContent')}>
                                Stay informed about the number of trees planted, locations, and the positive
                                environmental changes achieved.
                            </p>
                        </div>
                    </div>

                    <div class={cx('coreValuesContainer')}>
                        <div className={cx('numBlob')}>
                            <img alt="" src={numList4} />
                        </div>

                        <div>
                            <h1 className={cx('coreValuesTitle')}>Get Involved</h1>
                            <p className={cx('coreValuesContent')}>
                                We organize volunteering events and provide resources for those who wish to engage in
                                tree planting activities firsthand. Together, we can make a tangible difference.
                            </p>
                        </div>
                    </div>

                    <div class={cx('coreValuesContainer')}>
                        <div className={cx('numBlob')}>
                            <img alt="" src={numList5} />
                        </div>

                        <div>
                            <h1 className={cx('coreValuesTitle')}>Spread the Word</h1>
                            <p className={cx('coreValuesContent')}>
                                Raise awareness about the importance of reforestation and tree planting. Share your
                                contributions and experiences on social media platforms and encourage others to join the
                                GreenGrow community.
                            </p>
                        </div>
                    </div>
                </div>
                <img className={cx('right-blob-core-value')} alt="" src={blob} />
            </section>
        </div>
    );
};
export default AboutUs;
