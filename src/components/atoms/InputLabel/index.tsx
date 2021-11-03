import React from "react";
import "./style.css";
import cn from "classnames";

interface ILabelInput {
  text: string;
  className?: string;
}

export const InputLabel: React.FC<ILabelInput> = ({ text, className }) => {
  let classNames = cn("input-label", className);
  return <label className={classNames}>{text}</label>;
};
