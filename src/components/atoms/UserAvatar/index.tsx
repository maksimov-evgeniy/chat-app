import React from "react";
import "./style.css";
import UserImg from "./user-man.svg";

export const UserAvatar: React.FC = () => {
  return (
    <React.Fragment>
      <img src={UserImg} alt="Avatar" className="user-avatar" />
    </React.Fragment>
  );
};
