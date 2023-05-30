import React, { useState } from 'react';
import blob from '../../../../svg/2xblob.svg';
import earth from '../../../../svg/2xearth.svg';

import './Header.css';

const Header = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="blob">
                        <img src={blob} />
                        <div className="centered">
                            <h3 id="blobTitle">Making a positive impact on the environment</h3>
                            <p id="blobContent">
                                Join us in creating a greener future by donating towards tree planting projects.
                            </p>
                            <button className="button">Join us now!</button>
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
