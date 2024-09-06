import { AUTHENTICATED_ENTRY } from "configs/AppConfig";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { token } = useSelector((state) => state.auth);

  return token ? <Navigate to={AUTHENTICATED_ENTRY} /> : <Outlet />;
};

export default PublicRoute;
