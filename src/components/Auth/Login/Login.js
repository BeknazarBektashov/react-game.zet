import React from "react";
import { useForm } from "react-hook-form";

import classes from "./Login.module.css";

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
              <span>Ник в игре:</span>
              <input
                id="username"
                name="username"
                type="text"
                ref={register({ required: true, minLength: 2 })}
              />
              {errors.username && errors.username.type === "required" && (
                <p className={classes.Registration__error}>This is required</p>
              )}
              {errors.username && errors.username.type === "minLength" && (
                <p className={classes.Registration__error}>
                  This is field required min lenght of 2
                </p>
              )}
            </label>
            <label htmlFor="password">
              <span>Пароль:</span>
              <input
                id="password"
                name="password"
                type="password"
                ref={register({ required: true, minLength: 9 })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className={classes.Registration__error}>This is required</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className={classes.Registration__error}>
                  This is field required min lenght of 9
                </p>
              )}
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
