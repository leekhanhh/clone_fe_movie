import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const MainLayout = (props) => {
  return (
    <div className=" ">
      <Header />
      <Outlet />
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
