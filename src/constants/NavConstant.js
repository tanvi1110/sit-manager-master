import {
  DashboardOutlined,
  SlidersOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const NavConstant = {
  dashboard: {
    key: "dashboard",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "Dashboard",
    icon: DashboardOutlined,
    breadcrumb: true,
    default: {
      key: "dashboards-default",
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: "Default",
      icon: DashboardOutlined,
    },
  },
  generalMaster: {
    key: "general-master",
    path: `${APP_PREFIX_PATH}/general-master`,
    title: "General Master",
    icon: SlidersOutlined,
    discipline: {
      key: "general-master-discipline",
      path: `${APP_PREFIX_PATH}/general-master/discipline`,
      title: "Discipline",
      icon: TeamOutlined,
    },
  },
  master: {
    key: "master",
    path: `${APP_PREFIX_PATH}/master`,
    title: "Master",
    icon: SlidersOutlined,
    discipline: {
      key: "master-discipline",
      path: `${APP_PREFIX_PATH}/master/discipline`,
      title: "Discipline",
      icon: TeamOutlined,
    },
  },
};
