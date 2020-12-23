import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";

import img from "../../assets/images/content_1.png";

function Home() {
  return (
    <div className={classes.Home}>
      <div className={classes.Home__header_wrapper}>
        <div className={classes.Home__content}>
          <header>
            <h1>Добро пожаловать в Колизей</h1>
            <p>соревнуйтесь с другими игроками за место лучшего</p>
            <Button>начать играть</Button>
          </header>
        </div>
      </div>

      <section>
        <div className={classes.Home__content}>
          <article>
            <header>
              <h2>
                Киберспорт в твоем <br /> мобильном
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </header>
            <img src={img} alt="img" />
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
