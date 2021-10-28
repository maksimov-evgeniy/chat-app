import React from "react";
import "./style.css";
import cn from "classnames";

interface IUserMessage {
  text: string;
  className?: string;
}

export const UserMessage: React.FC<IUserMessage> = ({ text, className }) => {
  let classNames = cn("user-message", className);

  return <p className={classNames}>{text}</p>;
};
