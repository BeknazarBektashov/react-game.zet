import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import classes from "./Login.module.css";
import Button from "../../UI/Button/Button";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={classes.Login}>
      <div className={classes.Reg_content}>
        <article>
          <header>
            <h2>Войти в аккаунт</h2>
            <p> войдите в аккаунт чтобы вступить в турниры</p>
          </header>
        </article>
        <div className={classes.Reg_form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">
              <p>Ник в игре:</p>
              <input
                id="username"
                name="username"
                type="text"
                ref={register({ required: true, minLength: 2 })}
              />
              {errors.username && errors.username.type === "required" && (
                <p className="error">This is required</p>
              )}
              {errors.username && errors.username.type === "minLength" && (
                <p className="error">This is field required min lenght of 2</p>
              )}
            </label>
            <label htmlFor="password">
              <p>Пароль:</p>
              <input
                id="password"
                name="password"
                type="password"
                ref={register({ required: true, minLength: 9 })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="error">This is required</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="error">This is field required min lenght of 9</p>
              )}
            </label>
            <div className="submit_wrapper">
              <NavLink to="/auth/regist">У меня нету аккаунта</NavLink>
              <Button>в бой!</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
