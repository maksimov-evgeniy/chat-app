import React from "react";
import "./style.css";
import LogoImg from "./logo.svg";
import cn from "classnames";

interface ILogo {
  className?: string;
}
export const Logo: React.FC<ILogo> = ({ className }) => {
  let classNames = cn("logo", className);
  return <img src={LogoImg} alt="Logo" className={classNames} />;
};
