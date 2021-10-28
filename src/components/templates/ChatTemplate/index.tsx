import React from "react";
import "./style.css";
import { Header } from "./../../organisms/Header";
import { User } from "./../../molecules/User";

export const ChatTemplate: React.FC = () => {
  return (
    <React.Fragment>
      <div className="chat-template">
        <div className="chat-template__header">
          <Header />
        </div>
        <div className="chat-template__content">
          <div className="chat-template__users">
            <User className="chat-template_user" />
            <User className="chat-template_user" />
            <User className="chat-template_user" />
            <User className="chat-template_user" />
          </div>
          <div className="chat-template__dialog"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
