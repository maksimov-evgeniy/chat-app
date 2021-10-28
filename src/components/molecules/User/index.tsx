import React from "react";
import "./style.css";
import cn from "classnames";
import { UserAvatar } from "../../atoms/UserAvatar";
import { UserName } from "../../atoms/UserName";
import { UserMessage } from "../../atoms/UserMessage";

interface IUser {
  className?: string;
  userName: string;
  userMessage: string;
}

export const User: React.FC<IUser> = ({ className, userName, userMessage }) => {
  let classNames = cn("user", className);
  return (
    <div className={classNames}>
      <div className="user__user-avatar">
        <UserAvatar />
      </div>
      <div className="user__info">
        <UserName userName={userName} className="user__user-name" />
        <UserMessage userMessage={userMessage} />
      </div>
    </div>
  );
};
