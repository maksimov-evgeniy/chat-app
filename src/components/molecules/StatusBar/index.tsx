import React from "react";
import "./style.css";
import cn from "classnames";
import { CurrentName } from "./../../atoms/CurrentName/";
import { CurrentStatus } from "./../../atoms/CurrentStatus/";

interface IStatusBar {
  className?: string;
}
export const StatusBar: React.FC<IStatusBar> = ({ className }) => {
  let classNames = cn("status-bar", className);

  return (
    <div className={classNames}>
      <CurrentName
        currentName="Marina Joe"
        className="status-bar__current-name"
      />
      <CurrentStatus timeStatus="Last seen 3 minutes ago" />
    </div>
  );
};
