import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";

import img_1 from "../../assets/images/content_1.png";
import img_2 from "../../assets/images/content_2.png";
import icon_1 from "../../assets/images/icon_1.png";
import icon_2 from "../../assets/images/icon_2.png";

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
            <img src={img_1} alt="img" />
            <div className={classes.Home__list}>
              <div className={classes.Home__list_item}>
                <div className={classes.Home__list_item_img}>
                  <img src={icon_1} alt="img" />
                </div>
                <header>
                  <h4>Еженедельные битвы</h4>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </header>
              </div>
              <div className={classes.Home__list_item}>
                <div className={classes.Home__list_item_img}>
                  <img src={icon_2} alt="img" />
                </div>
                <header>
                  <h4>Еженедельные битвы</h4>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </header>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={classes.Home__box_section}>
        <div className={classes.Home__box}>
          <div className={classes.Home__content}>
            <article>
              <header>
                <h2>Еженедельные битвы</h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </header>
              <Button>начать играть</Button>
            </article>
          </div>
        </div>
      </section>

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
            <img src={img_2} alt="img" />
          </article>
        </div>
      </section>

      <section className={classes.Home__box_section}>
        <div className={classes.Home__box}>
          <div className={classes.Home__content}>
            <article>
              <header>
                <h2>Еженедельные битвы</h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </header>
              <Button>начать играть</Button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
