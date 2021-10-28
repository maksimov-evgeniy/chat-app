import React, { useState } from "react";
import "./style.css";
import { InputFull } from "../../molecules/InputFull";
import { Button } from "../../atoms/Button";

export const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form">
      <InputFull
        type="text"
        placeholder="Input user name"
        text="User name"
        className="form__input"
        value={name}
      />
      <InputFull
        type="password"
        placeholder="Input password"
        text="Password"
        value={password}
      />
      <Button buttonText="Log In" className="form__button" />
    </form>
  );
};
