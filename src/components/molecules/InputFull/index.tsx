import React, { ChangeEvent } from "react";
import cn from "classnames";
import "./style.css";
import { InputField } from "../../atoms/InputField";
import { InputLabel } from "../../atoms/InputLabel";
import { Formik, FormikErrors } from "formik";
interface IInputFull {
  text: string;
  placeholder: string;
  type: string;
  className?: string;
  classNameField?: string;
  name?: string;
  onBlur?(e: ChangeEvent<any>): void;
  onChange?(e: ChangeEvent<any>): void;
  value?: string;
}

export const InputFull: React.FC<IInputFull> = ({
  text,
  placeholder,
  type,
  className,
  name,
  onBlur,
  onChange,
  value,
  classNameField
}) => {
  let classNames = cn("input-full", className);
  return (
    <div className={classNames}>
      <InputLabel text={text} className="input-full__label" />
      <InputField
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={classNameField}
      />
    </div>
  );
};
