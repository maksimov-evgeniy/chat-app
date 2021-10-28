import React from "react";
import "./style.css";
import { Header } from "./../../organisms/Header";
import { User } from "./../../molecules/User";
import { StatusBar } from "../../molecules/StatusBar";
import { SendBar } from "../../organisms/SendBar";

export const ChatTemplate: React.FC = () => {
  return (
    <React.Fragment>
      <div className="chat-template">
        <div className="chat-template__header">
          <Header />
        </div>
        <div className="chat-template__content">
          <div className="chat-template__users">
            <User
              className="chat-template_user"
              userMessage="Hey!"
              userName="Marina Joe"
            />
          </div>

          <div className="chat-template__dialog">
            <div className="chat-template__status">
              <StatusBar />
            </div>
            <div className="chat-template__messages"></div>
            <div className="chat-template__send-bar">
              <SendBar />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
