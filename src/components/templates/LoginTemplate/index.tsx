import React from "react";
import "./style.css";

import { Form } from "../../organisms/Form";
import { Logo } from "../../atoms/Logo";
import { Typography } from "../../atoms/Typography";

export const LoginTemplate: React.FC = () => {
  return (
    <React.Fragment>
      <div className="login-template">
        <div className="login-template__form-wrap">
          <div className="login-template__welcome-text">
            <Logo className="login-template__logo" />
            <Typography
              type="h1"
              className="login-template__title"
              text="Welcome to Chatty!"
            />
            <Typography
              type="h2"
              className="login-template__subtitle"
              text="Please, autorize yourself"
            />
          </div>
          <Form />
        </div>
        <div className="login-template__picture"></div>
      </div>
    </React.Fragment>
  );
};
