import React, { ChangeEvent } from "react";
import "./style.css";

interface IInputField {
  placeholder: string;
  type: string;
  name?: string;
  onChange?(e: ChangeEvent<any>): void;
  onBlur?(e: ChangeEvent<any>): void;
  value?: string;
}

export const InputField: React.FC<IInputField> = ({
  placeholder,
  type,
  onBlur,
  onChange,
  name,
  value
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input-field"
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={value}
    />
  );
};
