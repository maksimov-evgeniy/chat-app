import React from "react";

import "./App.css";

import { Button } from "./components/atoms/button";
import { InputField } from "./components/atoms/inputField";
import { InputLabel } from "./components/atoms/inputLabel";

function App() {
  return (
    <div className="App">
      <Button buttonText="Log In" onClick={() => console.log("Hello!")} />
      <Button buttonText="Log In" hover={true} />
      <Button buttonText="Log In" active={true} />
      <Button buttonText="Log In" disabled={true} />
      <div>
        <InputLabel text="jejjeje" />
        <InputField placeholder="Input user name" type="text" />
      </div>
    </div>
  );
}

export default App;
