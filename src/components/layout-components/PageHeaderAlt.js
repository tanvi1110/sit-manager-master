/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  GRAY_SCALE,
  MEDIA_QUERIES,
  NAV_TYPE_TOP,
  TEMPLATE,
} from "constants/ThemeConstant";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const PageHeaderAlt = ({ children, background, className, overlap }) => {
  const [widthOffset, setWidthOffset] = useState(0);
  const ref = useRef(null);

  const navType = useSelector((state) => state.theme.navType);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    if (navType === NAV_TYPE_TOP) {
      const windowSize = window.innerWidth;
      const pageHeaderSize = ref.current.offsetWidth;
      setWidthOffset((windowSize - pageHeaderSize) / 2);
    }
  }, [navType]);

  const getStyle = () => {
    let style = { backgroundImage: background ? `url(${background})` : "none" };
    if (navType === NAV_TYPE_TOP) {
      style.marginRight = -widthOffset;
      style.marginLeft = -widthOffset;
      style.paddingLeft = 0;
      style.paddingRight = 0;
    }
    return style;
  };

  return (
    <div
      ref={ref}
      css={css`
        background-color: ${currentTheme === "dark"
          ? "#2f3a50"
          : GRAY_SCALE.WHITE};
        padding: ${TEMPLATE.LAYOUT_CONTENT_GUTTER}px;
        margin-top: -${TEMPLATE.LAYOUT_CONTENT_GUTTER}px;
        margin-left: -${TEMPLATE.LAYOUT_CONTENT_GUTTER}px;
        margin-right: -${TEMPLATE.LAYOUT_CONTENT_GUTTER}px;

        @media ${MEDIA_QUERIES.MOBILE} {
          margin-left: -${TEMPLATE.LAYOUT_CONTENT_GUTTER_SM}px;
          margin-right: -${TEMPLATE.LAYOUT_CONTENT_GUTTER_SM}px;
        }

        ${overlap ? "margin-bottom: -4.6875rem;" : ""}
      `}
      className={`page-header-alt ${className ? className : ""}`}
      style={getStyle()}
    >
      {navType === NAV_TYPE_TOP ? (
        <div className="container">{children}</div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

PageHeaderAlt.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  className: PropTypes.string,
  overlap: PropTypes.bool,
};

export default PageHeaderAlt;
