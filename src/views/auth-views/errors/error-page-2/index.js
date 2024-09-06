import { Button } from "antd";
import { APP_NAME } from "configs/AppConfig";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Flex from "components/shared-components/Flex";

const ErrorTwo = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  return (
    <div className={`h-100 ${theme === "light" ? "bg-white" : ""}`}>
      <div className="container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1">
        <div>
          <img
            className="img-fluid"
            src={`/img/${theme === "light" ? "logo.png" : "logo-white.png"}`}
            alt=""
          />
        </div>
        <div className="container">
          <div className="text-center mb-5">
            <img className="img-fluid" src="/img/others/img-21.png" alt="" />
            <h1 className="font-weight-bold mb-4">
              Sorry, something goes wrong
            </h1>
            <Link to="/app">
              <Button type="primary">Back to Home</Button>
            </Link>
          </div>
        </div>
        <Flex mobileFlex={false} justifyContent="between">
          <span>
            Copyright &copy; {`${new Date().getFullYear()}`}{" "}
            <span className="font-weight-semibold">{`${APP_NAME}`}</span>
          </span>
          <div>
            <a
              className="text-gray"
              href="/#"
              onClick={(e) => e.preventDefault()}
            >
              Term & Conditions
            </a>
            <span className="mx-2 text-muted"> | </span>
            <a
              className="text-gray"
              href="/#"
              onClick={(e) => e.preventDefault()}
            >
              Privacy & Policy
            </a>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default ErrorTwo;
