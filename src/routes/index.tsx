import React from "react";
import { Switch, Route } from "react-router-dom";

import { SCREENS } from "./endpoints";
import { Chat } from "../components/pages/chat";
import { Login } from "../components/pages/login";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_LOGIN}>
        <Login />
      </Route>
      <Route path={SCREENS.SCREEN_CHAT}>
        <Chat />
      </Route>
    </Switch>
  );
};
