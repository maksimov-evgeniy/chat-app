import React from "react";
import "./style.css";

import { LoginTemplate } from "../../templates/LoginTemplate";
import { WelcomeText } from "../../molecules/WelcomeText";
import { FormSignUp } from "../../organisms/FormSignUp";

export const SignUpPage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container">
        <LoginTemplate>
          <WelcomeText
            titleType="h1"
            subTitleType="h2"
            titleText="Sign Up to Chatty!"
            subTitleText="Registration"
          />
          <FormSignUp />
        </LoginTemplate>
      </div>
    </React.Fragment>
  );
};
