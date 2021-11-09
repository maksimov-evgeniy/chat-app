import React, { useState, useEffect } from "react";
import "./style.css";
import { InputFull } from "../../molecules/InputFull";
import { Button } from "../../atoms/Button";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SelectField } from "../../atoms/SelectField";
import { Captcha } from "./../../atoms/Captcha";
import { SecurityCode } from "./../../molecules/SecurityCode";

interface Values {
  name: string;
  password: string;
  passwordConfirmation: string;
  nickname: string;
  gender: number;
  capcha: string;
}

export const FormSignUp: React.FC = () => {
  let history: any = useHistory();

  function relocate(event: any) {
    event.preventDefault();
    return history.push("/login");
  }

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://109.194.37.212:93/api/auth");
      const data: any = await response.json();
      //console.log(myArr["genders"][0]["id"]);
      const gendersArr: [] = await data["genders"].map((d: any) => ({
        value: d.id,
        label: d.gender
      }));
      setOptions(gendersArr);
    };
    getData();
  }, []);

  const [captcha, setCaptcha] = useState<string>("");
  const [trigger, setTrigger] = useState<number>(0);

  useEffect(() => {
    const getCaptha = async () => {
      const response = await fetch(
        "http://109.194.37.212:93/api/auth/captcha" +
          "?t=" +
          new Date().getTime()
      );
      setCaptcha(response.url);
      console.log(response.ok);
    };
    getCaptha();
  }, [trigger]);

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          login: "",
          password: "",
          password_confirm: "",
          name: "",
          gender_id: 0,
          captcha: ""
        }}
        validationSchema={Yup.object({
          login: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          password_confirm: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          gender_id: Yup.number()
            .min(1, "Please, select your gender")
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

          let response = await fetch(
            "http://109.194.37.212:93/api/auth/register",
            {
              method: "POST",
              body: formData,
              headers: {
                "Access-Control-Allow-Origin": "*"
              },
              credentials: "same-origin"
            }
          );
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          isValid,
          dirty,
          setFieldValue
        }) => (
          <form id="form" className="form" onSubmit={handleSubmit}>
            <div className="form__input">
              <InputFull
                type="text"
                placeholder="Input user name"
                text="Create user name"
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
                placeholder="Create password"
                text="Create password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {touched.password && errors.password ? (
                <div className="form__error">{errors.password}</div>
              ) : null}
            </div>

            <div className="form__input">
              <InputFull
                type="password"
                placeholder="Password confirmation"
                text="Password confirmation"
                name="password_confirm"
                value={values.password_confirm}
                onChange={handleChange}
              />
              {touched.password_confirm && errors.password_confirm ? (
                <div className="form__error">{errors.password_confirm}</div>
              ) : null}
            </div>

            <div className="form__input">
              <InputFull
                type="text"
                placeholder="Nickname"
                text="Nickname"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {touched.name && errors.name ? (
                <div className="form__error">{errors.name}</div>
              ) : null}
            </div>

            <div className="form__input">
              <SelectField
                options={options}
                name="gender"
                onChange={(option: any) =>
                  setFieldValue("gender_id", option.value)
                }
              />
              {touched.gender_id && errors.gender_id ? (
                <div className="form__error">{errors.gender_id}</div>
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
                buttonText="Register"
                className="form__button"
                type="submit"
              />
              <Button
                buttonText="Log In"
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
    </React.Fragment>
  );
};
