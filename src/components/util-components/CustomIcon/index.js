import Icon from "@ant-design/icons";
import React from "react";

const CustomIcon = React.forwardRef((props, _) => (
  <Icon component={props.svg} className={props.className} />
));

export default CustomIcon;
