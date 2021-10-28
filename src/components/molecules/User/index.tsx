import React from "react";
import "./style.css";
import cn from "classnames";
import { UserAvatar } from "../../atoms/UserAvatar";
import { UserName } from "../../atoms/UserName";
import { UserMessage } from "../../atoms/UserMessage";

interface IUser {
  className?: string;
}

export const User: React.FC<IUser> = ({ className }) => {
  let classNames = cn("user", className);
  return (
    <div className={classNames}>
      <div className="user__user-avatar">
        <UserAvatar />
      </div>
      <div className="user__info">
        <UserName text="Marina Joe" className="user__user-name" />
        <UserMessage text="Sed ut perspiciatis" />
      </div>
    </div>
  );
};
