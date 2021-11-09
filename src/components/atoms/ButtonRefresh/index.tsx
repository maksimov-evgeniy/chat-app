import React from "react";
import "./style.css";
import cn from "classnames";

interface IButtonRefresh {
  className?: string;
  onClick?: () => void;
}
export const ButtonRefresh: React.FC<IButtonRefresh> = ({
  className,
  onClick
}) => {
  let classNames = cn("button-refresh", className);
  return <button type="button" onClick={onClick}></button>;
};
