import React from "react";
import "./style.css";

interface IInputField {
  placeholder: string;
  type: string;
  name?: string;
  value: string;
  onChange?(): void;
}

export const InputField: React.FC<IInputField> = ({
  placeholder,
  type,
  value,
  onChange
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input-field"
      value={value}
      onChange={onChange}
    />
  );
};
