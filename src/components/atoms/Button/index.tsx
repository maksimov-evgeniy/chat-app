import React from "react";
import "./style.css";
import cn from "classnames";

interface IButton {
  buttonText: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  hover?: boolean;
  className?: string;
  type?: any;
}

export const Button: React.FC<IButton> = ({
  buttonText,
  onClick,
  disabled,
  active,
  hover,
  className,
  type
}) => {
  let classNames = cn(
    "button",
    { "button__state--active": active },
    { "button__state--hover": hover },
    className
  );

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