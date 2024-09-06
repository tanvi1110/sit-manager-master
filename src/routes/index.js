import { AUTHENTICATED_ENTRY } from "configs/AppConfig";
import { protectedRoutes, publicRoutes } from "configs/RoutesConfig";
import React from "react";
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";

import AppRoute from "./AppRoute";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<Navigate replace to={AUTHENTICATED_ENTRY} />}
        />
        {protectedRoutes.map((route, index) => {
          return (
            <Route
              key={route.key + index}
              path={route.path}
              element={
                <AppRoute
                  routeKey={route.key}
                  component={route.component}
                  {...route.meta}
                />
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {publicRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <AppRoute
                  routeKey={route.key}
                  component={route.component}
                  {...route.meta}
                />
              }
            />
          );
        })}
      </Route>
    </RouterRoutes>
  );
};

export default Routes;
