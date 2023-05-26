import React, { useState } from 'react';

import AboutUs from '../../components/Layout/DefaultLayout/AboutUs/AboutUs';
import Achievements from '../../components/Layout/DefaultLayout/Achievements/Achievements';
import Projects from '../../Projects/Project';

import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="HomePage"></div>
            <AboutUs />
            <div className="CoreValue"></div>
            <Achievements />
            <Projects />
        </div>
    );
};
export default Home;
