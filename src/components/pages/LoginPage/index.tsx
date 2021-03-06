import React from "react";
import "./style.css";

import { LoginTemplate } from "../../templates/LoginTemplate";
import { WelcomeText } from "../../molecules/WelcomeText";
import { Form } from "../../organisms/Form";

export const LoginPage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container">
        <LoginTemplate>
          <WelcomeText
            titleType="h1"
            subTitleType="h2"
            titleText="Wellcome to Chatty!"
            subTitleText="Please, autorize yourself"
          />
          <Form />
        </LoginTemplate>
      </div>
    </React.Fragment>
  );
};
