import React from "react";
import "./style.css";
import { InputField } from "../../atoms/InputField";
import { InputLabel } from "../../atoms/InputLabel";

interface IInputFull {
  text: string;
  placeholder: string;
  type: string;
}

export const InputFull: React.FC<IInputFull> = ({
  text,
  placeholder,
  type
}) => {
  return (
    <div className="input-full">
      <div className="input-full__state-label"></div>
      <div className="input-full__input">
        <InputLabel text={text} />
        <InputField placeholder={placeholder} type={type} />
      </div>
    </div>
  );
};
