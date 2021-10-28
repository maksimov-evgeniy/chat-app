import React from "react";
import "./style.css";

import { ButtonEnigma } from "../../atoms/ButtonEnigma";
import { Logo } from "../../atoms/Logo";

export const Header: React.FC = () => {
  return (
    <React.Fragment>
      <div className="header">
        <Logo className="header__logo" />
        <ButtonEnigma className="header__button" />
      </div>
    </React.Fragment>
  );
};
