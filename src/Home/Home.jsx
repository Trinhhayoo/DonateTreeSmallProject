import React,  { useState } from "react";

import AboutUs from "../AboutUs/AboutUs";
import Achievements from "../Achievements/Achievements";
import Projects from "../Projects/Project";

import "./Home.css";





const Home = () => {
  
    return (
        <div>
          <div className="HomePage"></div>
          <AboutUs/>
          <div className="CoreValue">

          </div>
          <Achievements/>
          <Projects/>
        
        </div>

    );
};
export default Home;

