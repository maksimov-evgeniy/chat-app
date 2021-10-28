import React from "react";
import "./style.css";
import cn from "classnames";

interface IButtonLetter {
  className?: string;
}
export const ButtonLetter: React.FC<IButtonLetter> = ({ className }) => {
  let classNames = cn("button-letter-outer", className);

  return (
    <div className={classNames}>
      <input type="submit" className="button-letter" />
    </div>
  );
};
