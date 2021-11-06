import React from "react";
import { Switch, Route } from "react-router-dom";

import { SCREENS } from "./endpoints";
import { ChatPage } from "../components/pages/ChatPage";
import { LoginPage } from "../components/pages/LoginPage";
import { SignUpPage } from "../components/pages/SignUpPage";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={[SCREENS.SCREEN_LOGIN, SCREENS.SCREEN_MAIN]} exact>
        <LoginPage />
      </Route>
      <Route path={SCREENS.SCREEN_CHAT}>
        <ChatPage />
      </Route>
      <Route path={SCREENS.SCREEN_REG}>
        <SignUpPage />
      </Route>
    </Switch>
  );
};
