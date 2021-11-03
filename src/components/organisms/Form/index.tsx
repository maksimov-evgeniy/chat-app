import React, { useState } from "react";
import "./style.css";
import { InputFull } from "../../molecules/InputFull";
import { Button } from "../../atoms/Button";
import { useHistory } from "react-router-dom";

export const Form: React.FC = () => {
  let history: any = useHistory();

  let isValid: boolean = true; // предположим, что форма валидна

  function myRed(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    return isValid ? history.push("/chat") : NaN;
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        myRed(event);
      }}
    >
      <InputFull
        type="text"
        placeholder="Input user name"
        text="User name"
        className="form__input"
      />
      <InputFull type="password" placeholder="Input password" text="Password" />
      <Button buttonText="Log In" className="form__button" type="submit" />
    </form>
  );
};
