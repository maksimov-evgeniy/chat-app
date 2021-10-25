import React from "react";
import { Routes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { UITemplate } from "./components/templates/uiTemplate";

function App() {
  return (
    <div className="App">
      <h3>Welcome to hooks</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
