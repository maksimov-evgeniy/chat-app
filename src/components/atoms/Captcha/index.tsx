import React from "react";
import "./style.css";
import cn from "classnames";
import classNames from "classnames";

interface ICaptcha {
  imgLink?: string;
  className?: string;
}
export const Captcha: React.FC<ICaptcha> = ({ imgLink, className }) => {
  let classNames = cn("captcha", className);
  return (
    <div className={classNames}>
      <img src={imgLink} alt="" className="captcha__img" />
    </div>
  );
};
