import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import { useQuery } from "@tanstack/react-query";
import { getProfileApi } from "../apis/userprofile";

const MainLayout = (props) => {
  const { data: accountProfile } = useQuery({
    queryKey: ["Accountprofile"],
    queryFn: () =>
      getProfileApi().then((res) => {
        localStorage.setItem("AccountProfile", JSON.stringify(res.data));
        return res;
      }),
  });
  return (
    <div className="px-5 mainLayout bg-slate-900 font-body">
      <Header />
      <Outlet />
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
