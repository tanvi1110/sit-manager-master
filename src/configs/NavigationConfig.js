import { NavConstant } from "constants/NavConstant";

const dashBoardNavTree = [
  {
    key: NavConstant.dashboard.key,
    path: NavConstant.dashboard.path,
    title: NavConstant.dashboard.title,
    icon: NavConstant.dashboard.icon,
    breadcrumb: true,
    // isGroupTitle: true,
    submenu: [
      {
        key: NavConstant.dashboard.default.key,
        path: NavConstant.dashboard.default.path,
        title: NavConstant.dashboard.default.title,
        icon: NavConstant.dashboard.default.icon,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
  {
    key: NavConstant.generalMaster.key,
    path: NavConstant.generalMaster.path,
    title: NavConstant.generalMaster.title,
    icon: NavConstant.generalMaster.icon,
    breadcrumb: true,
    // isGroupTitle: true,
    submenu: [
      {
        key: NavConstant.generalMaster.discipline.key,
        path: NavConstant.generalMaster.discipline.path,
        title: NavConstant.generalMaster.discipline.title,
        icon: NavConstant.generalMaster.discipline.icon,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
  {
    key: NavConstant.master.key,
    path: NavConstant.master.path,
    title: NavConstant.master.title,
    icon: NavConstant.master.icon,
    breadcrumb: true,
    // isGroupTitle: true,
    submenu: [
      {
        key: NavConstant.master.discipline.key,
        path: NavConstant.master.discipline.path,
        title: NavConstant.master.discipline.title,
        icon: NavConstant.master.discipline.icon,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
