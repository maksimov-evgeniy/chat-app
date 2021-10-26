import React from "react";
import "./style.css";

import { Typography } from "../../atoms/Typography";

export const WelcomeText: React.FC = () => {
  return (
    <React.Fragment>
      <Typography type="h1" text="Welcome to Chatty!" />
      <Typography type="h2" text="Please, autorize yourself" />
    </React.Fragment>
  );
};
