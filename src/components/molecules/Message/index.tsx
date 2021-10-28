import React from "react";
import cn from "classnames";
import "./style.css";
import { Typography } from "./../../atoms/Typography";

interface IMessage {
  className?: string;
}

export const Message: React.FC<IMessage> = ({ className }) => {
  let classNames = cn("message", className);
  return <div className="classname"></div>;
};
