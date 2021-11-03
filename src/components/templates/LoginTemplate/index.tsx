import React from "react";
import "./style.css";
import { Form } from "../../organisms/Form";
import { WelcomeText } from "../../molecules/WelcomeText";

export const LoginTemplate: React.FC = () => {
  return (
    <React.Fragment>
      <div className="login-template">
        <div className="login-template__login">
          <div className="login-tamplate__login-inner">
            <div className="login-template__wellcome-wrap">
              <WelcomeText />
            </div>
            <Form />
          </div>
        </div>
        <div className="login-template__picture"></div>
      </div>
    </React.Fragment>
  );
};
