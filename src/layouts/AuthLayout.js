import styled from "@emotion/styled";
import React from "react";

const AuthContainer = styled.div(() => ({
  height: "100vh",
}));

export const AuthLayout = ({ children }) => {
  return <AuthContainer>{children}</AuthContainer>;
};

export default AuthLayout;
