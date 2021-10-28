import React, { Children } from "react";
import "./style";
import cn from "classnames";

interface IMessageWrap {
  className: string;
  message: string;
}

export const MessageWrap: React.FC<IMessageWrap> = ({ className }) => {
  let classNames = cn("message-wrap", className);
  return <div className={classNames}></div>;
};
