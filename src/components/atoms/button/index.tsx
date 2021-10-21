import React, { useState } from "react";
import "./style.css";

interface IButton {
  buttonText: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  hover?: boolean;
}

export const Button: React.FC<IButton> = ({
  buttonText,
  onClick,
  disabled,
  active,
  hover,
}) => {
  let classNames: string[] = ["button"];

  // const [isEnable, setState] = useState('')

  if (hover) {
    classNames.push("button__state--hover");
  }
  if (active) {
    classNames.push("button__state--active");
  }
  return (
    <button
      className={classNames.join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};
