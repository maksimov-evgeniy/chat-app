import React from "react";
import "./style.css";
import cn from "classnames";

interface IUserMessage {
  userMessage: string;
  className?: string;
}

export const UserMessage: React.FC<IUserMessage> = ({
  userMessage,
  className
}) => {
  let classNames = cn("user-message", className);

  return <p className={classNames}>{userMessage}</p>;
};
