import React from "react";
import "./style.css";

interface IStateLabel {
  text: string;
}
export const StateLabel: React.FC<IStateLabel> = ({ text }) => {
  return <span className="state-label">{text}</span>;
};
