import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./commonComponents/Navbar";
import LeftProfileBar from "./commonComponents/LeftProfileBar";
import RightSettingsBar from "./commonComponents/RightSettingsBar";

const CommonLayout = () => {
  return (
    <>
    <div>
      <Navbar />
      <div className="flex justify-between items-start">
      <LeftProfileBar/>
      <Outlet />
      <RightSettingsBar/>
      </div>
    </div>
    </>
  );
};

export default CommonLayout;
