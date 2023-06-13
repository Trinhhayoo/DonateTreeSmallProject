import React, { useState } from 'react';
import logo from '../../../../svg/2xlogo.svg';
import blob from '../../../../svg/2xblob.svg';
import plant from '../../../../image/plant_offer.jpg';
import numList1 from '../../../../svg/numList_1.svg';
import numList2 from '../../../../svg/numList_2.svg';
import numList3 from '../../../../svg/numList_3.svg';
import numList4 from '../../../../svg/numList_4.svg';
import numList5 from '../../../../svg/numList_5.svg';

import './AboutUs.css';

const AboutUs = () => {
    // console.log(1);
    // alert('hi');
    return (
        <div>
            <section id="aboutUs">
                <h2 className="title">About us</h2>
                <img id="rightBlob" src={blob} />
                <p className="aboutUsContent">
                    Welcome to GreenGrow, an online platform dedicated to making a positive impact on the environment by
                    supporting tree planting initiatives. Our mission is to create a greener future by facilitating the
                    donation of funds towards tree planting projects.
                </p>
                <p className="aboutUsContent">
                    At GreenGrow, we understand the critical role trees play in mitigating climate change, conserving
                    biodiversity, and improving air and water quality. By planting trees, we can combat deforestation,
                    restore ecosystems, and create sustainable environments for future generations.
                </p>
                <img id="leftBlob" src={blob} />
                <div className="imageContainer">
                    <img className="plant" src={plant} />
                    <img className="plant" src={plant} />
                    <img className="plant" src={plant} />
                </div>
            </section>

            <section id="coreValues">
                <h2 className="title">
                    {' '}
                    <img id="leftLogo" src={logo} /> Core values <img id="rightLogo" src={logo} />
                </h2>

                <div class="coreValuesContainer">
                    <div className="numBlob">
                        <img src={numList1} />
                    </div>

                    <div>
                        <h4 className="coreValuesTitle">Explore Tree Planting Projects</h4>
                        <p className="coreValuesContent">
                            Discover a wide range of tree planting initiatives around the world. We partner with
                            reputable organizations and local communities to ensure transparency, accountability, and
                            long-term sustainability.
                        </p>
                    </div>
                </div>

                <div class="coreValuesContainer">
                    <div className="numBlob">
                        <img src={numList2} />
                    </div>

                    <div>
                        <h4 className="coreValuesTitle">Donate Towards Tree Planting</h4>
                        <p className="coreValuesContent">
                            Select a tree planting project that resonates with you and make a donation directly through
                            our secure online platform. You can choose to contribute a one-time donation or set up
                            recurring donations to support ongoing efforts.
                        </p>
                    </div>
                </div>

                <div class="coreValuesContainer">
                    <div className="numBlob">
                        <img src={numList3} />
                    </div>

                    <div>
                        <h4 className="coreValuesTitle">Track the Impact</h4>
                        <p className="coreValuesContent">
                            Stay informed about the number of trees planted, locations, and the positive environmental
                            changes achieved.
                        </p>
                    </div>
                </div>

                <div class="coreValuesContainer">
                    <div className="numBlob">
                        <img src={numList4} />
                    </div>

                    <div>
                        <h4 className="coreValuesTitle">Get Involved</h4>
                        <p className="coreValuesContent">
                            We organize volunteering events and provide resources for those who wish to engage in tree
                            planting activities firsthand. Together, we can make a tangible difference.
                        </p>
                    </div>
                </div>

                <div class="coreValuesContainer">
                    <div className="numBlob">
                        <img src={numList5} />
                    </div>

                    <div>
                        <h4 className="coreValuesTitle">Spread the Word</h4>
                        <p className="coreValuesContent">
                            Raise awareness about the importance of reforestation and tree planting. Share your
                            contributions and experiences on social media platforms and encourage others to join the
                            GreenGrow community.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AboutUs;
