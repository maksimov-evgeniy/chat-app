import React from "react";

import "./App.css";

import { Button } from "./components/atoms/button";

function App() {
  return (
    <div className="App">
      <Button buttonText="Log In" onClick={() => console.log("Hello!")} />
      <Button buttonText="Log In" hover={true} />
      <Button buttonText="Log In" active={true} />
      <Button buttonText="Log In" disabled={true} />
    </div>
  );
}

export default App;
