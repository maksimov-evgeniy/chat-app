import React from "react";
import "./style.css";

interface ILabelInput {
  text: string;
}

export const InputLabel: React.FC<ILabelInput> = ({ text }) => {
  return <label className="input-label">{text}</label>;
};
