import React, { ChangeEvent } from "react";
import "./style.css";
import cn from "classnames";
import { InputFull } from "./../InputFull";
import { Captcha } from "./../../atoms/Captcha";
import { ButtonRefresh } from "./../../atoms/ButtonRefresh";

interface ISecurityCode {
  imgLink: string;
  onClick?: () => void;
  name: string;
  value: string;
  onChange?(e: ChangeEvent<any>): void;
}
export const SecurityCode: React.FC<ISecurityCode> = ({
  imgLink,
  onClick,
  name,
  value,
  onChange
}) => {
  return (
    <div className="security-code">
      <InputFull
        className="security-code__input-full"
        placeholder="Security code"
        type="text"
        text="Security code"
        name={name}
        value={value}
        onChange={onChange}
        classNameField="security-code__input"
      />
      <Captcha imgLink={imgLink} className="security-code__captcha" />
      <ButtonRefresh onClick={onClick} className="security-code__refresh" />
    </div>
  );
};
