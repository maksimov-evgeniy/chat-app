import React from "react";
import "./style.css";

import { LoginTemplate } from "../../templates/LoginTemplate";

export const LoginPage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container">
        <LoginTemplate />
      </div>
    </React.Fragment>
  );
};
