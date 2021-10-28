import React from "react";
import cn from "classnames";
import "./style.css";
import { InputField } from "../../atoms/InputField";
import { InputLabel } from "../../atoms/InputLabel";

interface IInputFull {
  text: string;
  placeholder: string;
  type: string;
  className?: string;
  name?: string;
  value: string;
  onChange?(): void;
}

export const InputFull: React.FC<IInputFull> = ({
  text,
  placeholder,
  type,
  className,
  value,
  onChange
}) => {
  let classNames = cn("input-full", className);
  return (
    <div className={classNames}>
      <InputLabel text={text} className="input-full__label" />
      <InputField
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
