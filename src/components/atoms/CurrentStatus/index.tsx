import React from "react";
import "./style.css";
import cn from "classnames";

interface ICurrentStatus {
  className?: string;
  timeStatus: string;
}

export const CurrentStatus: React.FC<ICurrentStatus> = ({
  className,
  timeStatus
}) => {
  let classNames = cn("current-status", className);

  return <p className={classNames}>{timeStatus}</p>;
};
