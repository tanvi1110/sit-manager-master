import { SettingOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { DIR_RTL } from "constants/ThemeConstant";
import React, { useState } from "react";

import NavItem from "./NavItem";
import ThemeConfigurator from "./ThemeConfigurator";

export const NavPanel = ({ direction, mode }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem onClick={showDrawer} mode={mode}>
        <SettingOutlined className="nav-icon mr-0" />
      </NavItem>
      <Drawer
        title="Theme Config"
        placement={direction === DIR_RTL ? "left" : "right"}
        width={350}
        onClose={onClose}
        open={open}
      >
        <ThemeConfigurator />
      </Drawer>
    </>
  );
};

export default NavPanel;
