import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";

const { userInfo } = useSelector((state) => state.auth);

const PrivateRoute = () => {
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
