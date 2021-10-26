import React from "react";
import { Switch, Route } from "react-router-dom";

import { SCREENS } from "./endpoints";
import { ChatPage } from "../components/pages/ChatPage";
import { LoginPage } from "../components/pages/LoginPage";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_LOGIN}>
        <LoginPage />
      </Route>
      <Route path={SCREENS.SCREEN_CHAT}>
        <ChatPage />
      </Route>
    </Switch>
  );
};
