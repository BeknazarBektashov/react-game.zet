import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";

import classes from "./Auth.module.css";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";

function Auth(props) {
  const auth = (
    <div>
      <article>
        <header>
          <h2>Зайдите в аккаунт или зарегистрируйтесь</h2>
        </header>
        <NavLink to="auth/login">
          <Button>Войти в аккаунт</Button>
        </NavLink>
        <NavLink to="auth/regist">
          <Button>зарегистрироватся</Button>
        </NavLink>
      </article>
    </div>
  );

  let authContent = auth;

  if (
    window.location.href.split("/")[3] === "auth" &&
    !window.location.href.split("/")[4]
  ) {
    authContent = auth;
  } else if (
    window.location.href.split("/")[3] === "auth" &&
    window.location.href.split("/")[4] === "regist"
  ) {
    authContent = <Registration></Registration>;
  } else if (
    window.location.href.split("/")[3] === "auth" &&
    window.location.href.split("/")[4] === "login"
  ) {
    authContent = <Login></Login>;
  } else {
    authContent = (
      <div>
        <h3>Error! 404</h3>
        <NavLink to="/">
          <Button>Назад домой</Button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className={classes.Auth}>
      <div className={classes.Auth__content}>{authContent}</div>
    </div>
  );
}

export default Auth;
