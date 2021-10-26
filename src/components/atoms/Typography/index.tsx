import React from "react";
import "./style.css";

interface ITypography {
  type: string;
  text: string;
  className?: string;
}
export const Typography: React.FC<ITypography> = ({
  type,
  text,
  className
}) => {
  return React.createElement(type, { className }, text);
};
