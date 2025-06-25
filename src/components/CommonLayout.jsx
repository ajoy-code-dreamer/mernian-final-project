import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./commonComponents/Navbar";
import Footer from "./commonComponents/Footer";

const CommonLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default CommonLayout;
