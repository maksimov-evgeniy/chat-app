import React from "react";
import "./style.css";
import cn from "classnames";

interface IButtonClip {
  className?: string;
}
export const ButtonClip: React.FC<IButtonClip> = ({ className }) => {
  let classNames = cn("clip-outer", className);
  return (
    <React.Fragment>
      <div className={classNames}>
        <input type="file" className="clip" />
      </div>
    </React.Fragment>
  );
};
