/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Layout } from "antd";
import {
  NAV_TYPE_SIDE,
  SIDE_NAV_DARK,
  SIDE_NAV_WIDTH,
} from "constants/ThemeConstant";
import { DARK_MODE, GRAY_SCALE, TEMPLATE } from "constants/ThemeConstant";
import { Scrollbars } from "react-custom-scrollbars-2";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

import MenuContent from "./MenuContent";

const { Sider } = Layout;

export const SideNav = ({
  navCollapsed,
  routeInfo,
  hideGroupTitle,
  currentTheme,
}) => {
  const sideNavTheme = useSelector((state) => state.theme.sideNavTheme);
  const props = { sideNavTheme, routeInfo, hideGroupTitle };
  return (
    <Sider
      css={css`
        height: calc(100vh - ${TEMPLATE.HEADER_HEIGHT}px);
        position: fixed !important;
        top: ${TEMPLATE.HEADER_HEIGHT}px;
        box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.15);
        z-index: 999;
        direction: ltr;
        ${currentTheme === "light" && sideNavTheme !== SIDE_NAV_DARK
          ? `background-color: ${GRAY_SCALE.WHITE} !important;`
          : `background-color: ${TEMPLATE.SIDE_NAV_DARK_BG_COLOR} !important;`}
        ${currentTheme === "dark" && sideNavTheme !== SIDE_NAV_DARK
          ? `background-color: ${DARK_MODE.BG_COLOR} !important`
          : ``}
        ${currentTheme === "dark" && sideNavTheme === SIDE_NAV_DARK
          ? `background-color: ${TEMPLATE.SIDE_NAV_DARK_BG_COLOR} !important`
          : ``}
      `}
      className={`side-nav ${
        sideNavTheme === SIDE_NAV_DARK ? "side-nav-dark" : ""
      }`}
      width={SIDE_NAV_WIDTH}
      collapsed={navCollapsed}
    >
      <Scrollbars autoHide>
        <MenuContent type={NAV_TYPE_SIDE} {...props} />
      </Scrollbars>
    </Sider>
  );
};

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, sideNavTheme, currentTheme } = theme;
  return { navCollapsed, sideNavTheme, currentTheme };
};

export default connect(mapStateToProps)(SideNav);
