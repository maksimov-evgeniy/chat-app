import React from "react";
import "./style.css";

import { Typography } from "../../atoms/Typography";
import { Logo } from "../../atoms/Logo";

interface IWelcomeText {
  titleType: string;
  subTitleType: string;
  titleText: string;
  subTitleText: string;
  titleClass?: string;
  subTitleClass?: string;
}

export const WelcomeText: React.FC<IWelcomeText> = ({
  titleType,
  subTitleType,
  titleText,
  subTitleText,
  titleClass,
  subTitleClass
}) => {
  return (
    <div className="welcome-text">
      <Logo className="welcome-text__logo" />
      <Typography
        type={titleType}
        text={titleText}
        className="welcome-text__title"
      />
      <Typography
        type={subTitleType}
        text={subTitleText}
        className="welcome-text__subtitle"
      />
    </div>
  );
};
