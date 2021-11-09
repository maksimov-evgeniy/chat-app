import React from "react";
import "./style.css";
import cn from "classnames";

interface ICaptcha {
  imgLink?: string;
}
export const Captcha: React.FC<ICaptcha> = ({ imgLink }) => {
  return (
    <div className="captcha">
      <img src={imgLink} alt="" className="captcha__img" />
    </div>
  );
};
