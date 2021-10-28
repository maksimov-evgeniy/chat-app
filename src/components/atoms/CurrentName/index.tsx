import React from "react";
import "./style.css";
import cn from "classnames";

interface ICurrentName {
  className?: string;
  currentName: string;
}

export const CurrentName: React.FC<ICurrentName> = ({
  currentName,
  className
}) => {
  let classNames = cn("current-name", className);

  return <h3 className={classNames}>{currentName}</h3>;
};
