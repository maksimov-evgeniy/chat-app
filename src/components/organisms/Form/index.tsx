import React, { useState } from "react";
import "./style.css";
import { InputFull } from "../../molecules/InputFull";
import { Button } from "../../atoms/Button";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { trace } from "console";

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
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isValid,
        dirty
      }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__input">
            <InputFull
              type="text"
              placeholder="Input user name"
              text="User name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {touched.name && errors.name ? (
              <div className="form__error">{errors.name}</div>
            ) : null}
          </div>

          <div className="form__input">
            <InputFull
              type="password"
              placeholder="Input password"
              text="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {touched.password && errors.password ? (
              <div className="form__error">{errors.password}</div>
            ) : null}
          </div>
          <Button buttonText="Log In" className="form__button" type="submit" />
        </form>
      )}
    </Formik>
  );
};
