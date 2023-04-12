import React from "react";
import s from "./Landing.module.css";
import { Link } from "react-router-dom";
import arrow from "../../images/acc_arrow.svg";
import recipe from "../../images/recipe-landing.png";

function LandingPage() {
  return (
    <div>
      <body>
        {/* --- header --- */}
        <header>
          <nav>
            <span className={s.logo}>HENRY | FOOD</span>
            <Link to="/home" className={s.acceder}>
              Start Now
            </Link>
          </nav>
        </header>
        {/* --- main --- */}
        <main>
          <div className={s.main_left}>
            <h1 className={s.titulo}>
              Let's Start to <span className={s.titulo_receta}>Cook</span> with{" "}
              <span className={s.titulo}>Henry Food</span>
            </h1>
            <p className={s.sub_titulo}>
              Discover our delicious recipes, ideal for cooking at home, easily
              with our app.
            </p>
            <Link to="/home" className={s.acceder_grande}>
              Start Now
              <img className={s.arrow} src={arrow} alt="arrow" />
            </Link>
          </div>

          <div className={s.main_right}>
            <div className={s.div_hero}>
              <img className={s.hero} src={recipe} alt="hero" />
              {/* <img
              className={s.hero_responsive}
              src={hero_desktop_responsive}
              alt="hero"
            />
            <img className={s.hero_mobile} src={hero_mobile} alt="hero" /> */}
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default LandingPage;
