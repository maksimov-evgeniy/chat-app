import React from "react";
import "./style.css";

interface IInputField {
  placeholder: string;
  type: string;
  name?: string;
}

export const InputField: React.FC<IInputField> = ({ placeholder, type }) => {
  return (
    <input type={type} placeholder={placeholder} className="input-field" />
  );
};
