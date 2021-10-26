import React from "react";
import "./style.css";
import { InputFull } from "../../molecules/InputFull";
import { Button } from "../../atoms/Button";

export const Form: React.FC = () => {
  return (
    <React.Fragment>
      <InputFull type="text" placeholder="Input user name" text="User name" />
      <InputFull type="password" placeholder="Input password" text="Password" />
      <Button buttonText="Log In" />
    </React.Fragment>
  );
};
