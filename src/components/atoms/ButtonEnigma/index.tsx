import React from "react";
import "./style.css";
import EnigmaImg from "./button-enigma.svg";
import cn from "classnames";

interface IButtonEnigma {
  className?: string;
}
export const ButtonEnigma: React.FC<IButtonEnigma> = ({ className }) => {
  let classNames = cn("button-enigma", className);
  return (
    <React.Fragment>
      <div className={classNames}>
        <img src={EnigmaImg} alt="Enigma" className="button-enigma__img" />
      </div>
    </React.Fragment>
  );
};
