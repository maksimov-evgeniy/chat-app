import React, { ChangeEvent } from "react";
import "./style.css";
import cn from "classnames";

interface IInputField {
  placeholder: string;
  type: string;
  name?: string;
  onChange?(e: ChangeEvent<any>): void;
  onBlur?(e: ChangeEvent<any>): void;
  value?: string;
  className?: string;
}

export const InputField: React.FC<IInputField> = ({
  placeholder,
  type,
  onBlur,
  onChange,
  name,
  value,
  className
}) => {
  let classNames = cn("input-field", className);
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={value}
    />
  );
};
