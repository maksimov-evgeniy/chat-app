import React from "react";
import "./style.css";

import { Typography } from "../../atoms/Typography";
import { Logo } from "../../atoms/Logo";

export const WelcomeText: React.FC = () => {
  return (
    <div className="welcome-text">
      <Logo className="welcome-text__logo" />
      <Typography
        type="h1"
        text="Wellcome to Chatty!"
        className="welcome-text__title"
      />
      <Typography
        type="h2"
        text="Please, autorize yourself"
        className="welcome-text__subtitle"
      />
    </div>
  );
};
