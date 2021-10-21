import React, { useState } from "react";
import "./style.css";

interface IButton {
  buttonText: string;
  onClick: () => void;
  disabled?: string;
}

export const Button: React.FC<IButton> = ({
  buttonText,
  onClick,
  disabled,
}) => {
  let classNames: string[] = ["text-input"];
  return (
    <button className={classNames.join(" ")} onClick={onClick}>
      {buttonText}
    </button>
  );
};
