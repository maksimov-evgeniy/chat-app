import React from "react";
import "./style.css";
import cn from "classnames";

interface IUserName {
  text: string;
  className?: string;
}

export const UserName: React.FC<IUserName> = ({ text, className }) => {
  let classNames = cn("user-name", className);

  return <h4 className={classNames}>{text}</h4>;
};
