import React from "react";
import "./style.css";
import cn from "classnames";

interface IUserName {
  userName: string;
  className?: string;
}

export const UserName: React.FC<IUserName> = ({ userName, className }) => {
  let classNames = cn("user-name", className);

  return <h4 className={classNames}>{userName}</h4>;
};
