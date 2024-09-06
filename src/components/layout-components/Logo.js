import styled from "@emotion/styled";
import { Grid } from "antd";
import { APP_NAME } from "configs/AppConfig";
import {
  NAV_TYPE_TOP,
  SIDE_NAV_COLLAPSED_WIDTH,
  SIDE_NAV_WIDTH,
} from "constants/ThemeConstant";
import { TEMPLATE } from "constants/ThemeConstant";
import React from "react";
import { useSelector } from "react-redux";
import utils from "utils";

const LogoWrapper = styled.div(() => ({
  height: TEMPLATE.HEADER_HEIGHT,
  display: "flex",
  alignItems: "center",
  padding: "0 1rem",
  backgroundColor: "transparent",
  transition: "all .2s ease",
}));

const { useBreakpoint } = Grid;

export const Logo = ({ mobileLogo, logoType }) => {
  const isMobile = !utils.getBreakPoint(useBreakpoint()).includes("lg");

  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const navType = useSelector((state) => state.theme.navType);

  const getLogoWidthGutter = () => {
    const isNavTop = navType === NAV_TYPE_TOP ? true : false;
    if (isMobile && !mobileLogo) {
      return 0;
    }
    if (isNavTop) {
      return "auto";
    }
    if (navCollapsed) {
      return `${SIDE_NAV_COLLAPSED_WIDTH}px`;
    } else {
      return `${SIDE_NAV_WIDTH}px`;
    }
  };

  const getLogo = () => {
    if (logoType === "light") {
      if (navCollapsed) {
        return "/img/logo-sm-white.png";
      }
      return "/img/logo-white.png";
    }

    if (navCollapsed) {
      return "/img/logo-sm.png";
    }
    return "/img/logo.png";
  };

  return (
    <LogoWrapper
      className={isMobile && !mobileLogo ? "d-none" : "logo"}
      style={{ width: `${getLogoWidthGutter()}` }}
    >
      <img src={getLogo()} alt={`${APP_NAME} logo`} />
    </LogoWrapper>
  );
};

export default Logo;
