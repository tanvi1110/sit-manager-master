import {
  AUTH_PREFIX_PATH,
  REDIRECT_URL_KEY,
  UNAUTHENTICATED_ENTRY,
} from "configs/AppConfig";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to={`${AUTH_PREFIX_PATH}${UNAUTHENTICATED_ENTRY}?${REDIRECT_URL_KEY}=${location.pathname}`}
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
