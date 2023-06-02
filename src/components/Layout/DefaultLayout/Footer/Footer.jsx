import React, { useState } from 'react';

import mail from '../../../../svg/2xmail.svg';
import locate from '../../../../svg/2xlocate.svg';
import logo from '../../../../svg/2xlogo.svg';

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="foter">
                <div className="information-container">
                    <div className="inside-container">
                        <div className="divide-container">
                            <div className="logo-foter">
                                {/* <img className="logo-footer" src={spalgTS} alt="PUN" /> */}
                                <span>
                                    <img className=" logo-footer" src={logo} />
                                </span>

                                <h3 className="title-project">GREENGROW</h3>

                                <br />
                                <br />
                                <br />
                                {/* <img className="fbic" src={fbic} />
                                <img className="inic" src={inic} /> */}
                            </div>
                            <div className="lien-he">
                                <h2 className=" title-foter">Contact</h2>
                                <ul className="info">
                                    <li className="each-info">
                                        <span>
                                            <img className=" ic-footer img-dc " src={locate} />
                                        </span>
                                        <p className="foter-ic foter-dc">
                                            227 Nguyen Van Cu, district 5, Ho Chi Minh City
                                        </p>
                                    </li>

                                    <li className="each-info">
                                        <span>
                                            <img className="ic-footer img-mail " src={mail} />
                                        </span>
                                        <p className="foter-ic foter-mail">Greengrow@gmail.com</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="Company">
                                <h2 className="title-foter">Company</h2>
                                <ul className="co-list">
                                    <li className="co-li">AboutUs</li>
                                    <li className="co-li">Values</li>
                                    <li className="co-li">Achievements</li>
                                </ul>
                            </div>
                            <div className="Resource">
                                <h2 className="title-foter">Resources</h2>
                                <ul className="co-list">
                                    <li className="co-li">Projects</li>
                                    <li className="co-li">Privacy</li>
                                    <li className="co-li">Term of use</li>
                                </ul>
                            </div>
                            <div className="line" />
                            <div className="bottom-line">
                                <span>
                                    <p>@Allright reserve 2022</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
