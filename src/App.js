
import {
 
  Routes,
  Route, Redirect,Navigate
} from "react-router-dom";
import LayoutNavigation from "./LayoutNavigation/LayoutNavigation";
import Home from "./Home/Home";
import React, { Component }  from 'react';


const App = () => {


  return (
  
      <Routes>
        <Route path="/" element={<LayoutNavigation />}>
          <Route index element={<Home />} />


        </Route>
      </Routes>
    
  );
};

export default App;
