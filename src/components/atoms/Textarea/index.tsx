import React from "react";
import "./style.css";
import cn from "classnames";

interface ITextarea {
  className?: string;
  placeholder?: string;
  text?: string;
}
export const Textarea: React.FC<ITextarea> = ({
  className,
  placeholder,
  text
}) => {
  let classNames = cn("textarea", className);
  return (
    <textarea placeholder={placeholder} className={classNames}>
      {text}
    </textarea>
  );
};
