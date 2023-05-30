import React, { useState } from 'react';

import Navigate from '../../components/Layout/DefaultLayout/Navigate';
import Header from '../../components/Layout/DefaultLayout/Header/Header';
import AboutUs from '../../components/Layout/DefaultLayout/AboutUs/AboutUs';
import Achievements from '../../components/Layout/DefaultLayout/Achievements/Achievements';
import Projects from '../../components/Layout/DefaultLayout/Projects/Project';
import Footer from '../../components/Layout/DefaultLayout/Footer/Footer';

import './Home.css';
import SignUp from '../SignUp/SignUp';

const Home = () => {
    return (
        <div>
            {/* <div className="HomePage"></div> */}
            <Navigate />
            <Header />
            <AboutUs />
            {/* <div className="CoreValue"></div> */}
            <Achievements />
            <Projects />
            <SignUp />
            <Footer />
        </div>
    );
};
export default Home;
