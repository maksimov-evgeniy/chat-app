import React from "react";
import "./style.css";
import { InputFull } from "../../molecules/InputFull";
import { Button } from "../../atoms/Button";
import { useForm } from "react-hook-form";

export const Form: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: object) => console.log("Отправлено", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <InputFull
        type="text"
        placeholder="Input user name"
        text="User name"
        className="form__input"
      />
      <InputFull type="password" placeholder="Input password" text="Password" />
      <Button buttonText="Log In" className="form__button" />
    </form>
  );
};
