import React from "react";
import style from "./Card.module.css";

function Card({ img, title, typeDiets, healthScore }) {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img className={style.card.image} src={img} alt=""/>
      </div>

      <div className={style.div_info_card}>
        <span className={style.card.name}>{title}</span>

        <div>
          <span className={style.card.typeDiets}>
            Type Diets:{typeDiets.map((e) => e.name)}
          </span>
        </div>
        <div>
          <p className={style.healthScore}>HealthScore:{healthScore}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
