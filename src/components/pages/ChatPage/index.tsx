import React, { useEffect, useState } from "react";
import "./style.css";
import { UserAvatar } from "../../atoms/UserAvatar";
import { UserName } from "../../atoms/UserName";
import { UserMessage } from "../../atoms/UserMessage";

import { ChatTemplate } from "../../templates/ChatTemplate";
const ws = new WebSocket(
  "ws://109.194.37.212:2346/?type=weeewq&ws_id=c23732cf2939e85697f288d3a95c43b9"
);
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
