import {
  EditOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar, Dropdown } from "antd";
import {
  FONT_SIZES,
  FONT_WEIGHT,
  MEDIA_QUERIES,
  SPACER,
} from "constants/ThemeConstant";
import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "store/slices/authSlice";

import Flex from "components/shared-components/Flex";

import NavItem from "./NavItem";

const Icon = styled.div(() => ({
  fontSize: FONT_SIZES.LG,
}));

const Profile = styled.div(() => ({
  display: "flex",
  alignItems: "center",
}));

const UserInfo = styled("div")`
  padding-left: ${SPACER[2]};

  @media ${MEDIA_QUERIES.MOBILE} {
    display: none;
  }
`;

const Name = styled.div(() => ({
  fontWeight: FONT_WEIGHT.SEMIBOLD,
}));

const Title = styled.span(() => ({
  opacity: 0.8,
}));

// const MenuItem = (props) => (
// 	<Flex as="a" href={props.path} alignItems="center" gap={SPACER[2]}>
// 		<Icon>{props.icon}</Icon>
// 		<span>{props.label}</span>
// 	</Flex>
// )

const MenuItemSignOut = (props) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div onClick={handleSignOut}>
      <Flex alignItems="center" gap={SPACER[2]}>
        <Icon>
          <LogoutOutlined />
        </Icon>
        <span>{props.label}</span>
      </Flex>
    </div>
  );
};

const items = [
  {
    key: "Sign Out",
    label: <MenuItemSignOut label="Sign Out" />,
  },
];

export const NavProfile = ({ mode }) => {
  return (
    <Dropdown placement="bottomRight" menu={{ items }} trigger={["click"]}>
      <NavItem mode={mode}>
        <Profile>
          <Avatar src="/img/avatars/thumb-1.jpg" />
          <UserInfo className="profile-text">
            <Name>Charlie Howard</Name>
            <Title>Frontend Developer</Title>
          </UserInfo>
        </Profile>
      </NavItem>
    </Dropdown>
  );
};

export default NavProfile;
