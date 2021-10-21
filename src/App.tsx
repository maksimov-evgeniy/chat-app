import React from "react";

import "./App.css";

import { Button } from "./components/atoms/button";

function App() {
  return (
    <div className="App">
      <Button buttonText="Log In" onClick={() => console.log("Hello!")} />
    </div>
  );
}

export default App;
