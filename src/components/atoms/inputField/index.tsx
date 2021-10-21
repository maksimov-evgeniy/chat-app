import React from "react";
import "./style.css";

interface IInputField {
  placeholder: string;
  type: string;
  // onChange: (value: string) => void,
}

export const InputField: React.FC<IInputField> = ({ placeholder, type }) => {
  return (
    <input type="text" placeholder={placeholder} className="input-field" />
  );
};
