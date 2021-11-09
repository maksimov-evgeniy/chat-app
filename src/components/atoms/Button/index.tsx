import React from "react";
import "./style.css";
import cn from "classnames";

interface IButton {
  buttonText: string;
  onClick?: (event: any) => void;
  disabled?: boolean;
  active?: boolean;
  hover?: boolean;
  className?: string;
  type?: any;
  secondary?: string;
}

export const Button: React.FC<IButton> = ({
  buttonText,
  onClick,
  disabled,
  active,
  hover,
  className,
  type,
  secondary
}) => {
  let classNames = cn("button", secondary ? "secondary" : "", className);

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {buttonText}
    </button>
  );
};
