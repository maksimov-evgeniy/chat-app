import React, { useState } from "react";
import "./style.css";
import { InputFull } from "../../molecules/InputFull";
import { Button } from "../../atoms/Button";
import { useHistory } from "react-router-dom";
import { useFormik, Formik } from "formik";

interface Values {
  name: string;
  password: string;
}

export const Form: React.FC = ({}) => {
  //let history: any = useHistory();

  // let isValid: boolean = true; // предположим, что форма валидна

  // function myRed(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   return isValid ? history.push("/chat") : NaN;
  // }

  return (
    <Formik
      initialValues={{
        name: "",
        password: ""
      }}
      onSubmit={(values: Values) => {
        alert(JSON.stringify(values));
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <form className="form" onSubmit={handleSubmit}>
          <InputFull
            type="text"
            placeholder="Input user name"
            text="User name"
            className="form__input"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <InputFull
            type="password"
            placeholder="Input password"
            text="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button buttonText="Log In" className="form__button" type="submit" />
        </form>
      )}
    </Formik>
  );
};
