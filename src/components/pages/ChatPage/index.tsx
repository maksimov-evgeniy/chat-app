import React from "react";
import "./style.css";
import { UserAvatar } from "../../atoms/UserAvatar";
import { UserName } from "../../atoms/UserName";
import { UserMessage } from "../../atoms/UserMessage";

import { ChatTemplate } from "../../templates/ChatTemplate";

export const ChatPage: React.FC = () => {
  return (
    <div className="container">
      <ChatTemplate />
      {/* <UserAvatar />
      <UserName text="Maria Joe"/>
      <UserMessage text="How are you doing?" /> */}
    </div>
  );
};
