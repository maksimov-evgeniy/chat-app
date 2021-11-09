import React, { useState, useEffect } from "react";
import "./style.css";
import { InputFull } from "../../molecules/InputFull";
import { Button } from "../../atoms/Button";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { trace } from "console";
import { SecurityCode } from "./../../molecules/SecurityCode";
interface Values {
  login: string;
  password: string;
  captcha: string;
}

export const Form: React.FC = ({}) => {
  let history: any = useHistory();

  function relocate(event: any) {
    event.preventDefault();
    return history.push("/registration");
  }

  const [captcha, setCaptcha] = useState<string>("");
  const [trigger, setTrigger] = useState<number>(0);

  useEffect(() => {
    const getCaptha = async () => {
      const response = await fetch(
        "http://109.194.37.212:93/api/auth/captcha" +
          "?t=" +
          new Date().getTime()
      );
      if (response.ok) {
        setCaptcha(response.url);
      } else {
        console.log(response.status);
      }
    };
    getCaptha();
  }, [trigger]);

  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
        captcha: ""
      }}
      validationSchema={Yup.object({
        login: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        captcha: Yup.string()
          .min(5, "Must be 5 characters")
          .required("Required")
      })}
      onSubmit={async (data) => {
        const tempData: any = data;
        const formData = new FormData();

        for (var key in tempData) {
          formData.append(key, tempData[key]);
        }

        let response = await fetch("http://109.194.37.212:93/api/auth/login", {
          method: "POST",
          body: formData,
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          credentials: "same-origin"
        });
        if (response.ok) {
          console.log(response);
          return history.push("/chat");
        }
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__input">
            <InputFull
              type="text"
              placeholder="Input user name"
              text="User name"
              name="login"
              value={values.login}
              onChange={handleChange}
            />
            {touched.login && errors.login ? (
              <div className="form__error">{errors.login}</div>
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

          <div className="form__input">
            <SecurityCode
              name="captcha"
              value={values.captcha}
              onChange={handleChange}
              imgLink={captcha}
              onClick={() => {
                setTrigger(trigger + 1);
              }}
            />
            {touched.captcha && errors.captcha ? (
              <div className="form__error">{errors.captcha}</div>
            ) : null}
          </div>

          <div className="form__buttons">
            <Button
              buttonText="Log In"
              className="form__button"
              type="submit"
            />
            <Button
              buttonText="Registration"
              className="form__button"
              type="button"
              onClick={(event) => {
                relocate(event);
              }}
              secondary="true"
            />
          </div>
        </form>
      )}
    </Formik>
  );
};
