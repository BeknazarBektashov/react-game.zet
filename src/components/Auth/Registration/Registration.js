import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button/Button";

import classes from "./Registration.module.css";

function Registration(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={classes.Registration}>
      <article>
        <header>
          <h2>зарегистрируйся и в бой!</h2>
          <p>Зарегистрируйтесь для участия в турнирах</p>
        </header>
      </article>
      <div className={classes.Reg_form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="phone">
            <p>Номер телефона от Элсом:</p>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="0700987654"
              ref={register({ required: true, minLength: 9 })}
            />
            {errors.phone && errors.phone.type === "required" && (
              <p className="error">This is required</p>
            )}
            {errors.phone && errors.phone.type === "minLength" && (
              <p className="error">This is field required min lenght of 9</p>
            )}
          </label>
          <label htmlFor="username">
            <p>Ник в игре:</p>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="gamer1"
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
            <p>Придумайте пароль:</p>
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
            <NavLink to="/auth/login">У меня есть аккаунта</NavLink>
            <Button>в бой!</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
