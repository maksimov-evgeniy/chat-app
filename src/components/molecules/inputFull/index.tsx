import React from "react";
import "./style.css";
import { InputField } from "../../atoms/inputField";
import { InputLabel } from "../../atoms/inputLabel";
import { StateLabel } from "../../atoms/stateLabel/";

export const InputFull: React.FC = () => {
  return (
    <div className="input-full">
      <div className="input-full__state-label"></div>
      <div className="input-full__input">
        <InputLabel text="Name" />
        <InputField placeholder="Input user name" type="text" />
      </div>
    </div>
  );
};
