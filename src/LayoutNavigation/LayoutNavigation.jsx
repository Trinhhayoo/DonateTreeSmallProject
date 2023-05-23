import React from "react";
import {Outlet} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Navigate } from 'react-router-dom';

const LayoutNavigation = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer  />
    </>
  );
};

export default LayoutNavigation;