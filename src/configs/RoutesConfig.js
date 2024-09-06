import { AUTH_PREFIX_PATH } from "configs/AppConfig";
import { NavConstant } from "constants/NavConstant";
import React from "react";

export const publicRoutes = [
  {
    key: "login",
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(
      () => import("views/auth-views/authentication/login")
    ),
  },
  {
    key: "register",
    path: `${AUTH_PREFIX_PATH}/register`,
    component: React.lazy(
      () => import("views/auth-views/authentication/register")
    ),
  },
  {
    key: "forgot-password",
    path: `${AUTH_PREFIX_PATH}/forgot-password`,
    component: React.lazy(
      () => import("views/auth-views/authentication/forgot-password")
    ),
  },
];

export const protectedRoutes = [
  {
    key: NavConstant.dashboard.default.key,
    path: NavConstant.dashboard.default.path,
    component: React.lazy(() => import("views/app-views/dashboards/default")),
  },
  {
    key: NavConstant.generalMaster.key,
    path: NavConstant.generalMaster.path,
    component: React.lazy(() => import("views/app-views/general-master")),
  },
  {
    key: NavConstant.master.key,
    path: NavConstant.master.path,
    component: React.lazy(() => import("views/app-views/general-master")),
  },
  {
    key: NavConstant.generalMaster.discipline.key,
    path: NavConstant.generalMaster.discipline.path,
    component: React.lazy(
      () => import("views/app-views/general-master/discipline")
    ),
  },
  {
    key: NavConstant.master.discipline.key,
    path: NavConstant.master.discipline.path,
    component: React.lazy(
      () => import("views/app-views/general-master/discipline")
    ),
  },
];
