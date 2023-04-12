import React from "react";

import RecipeDetail from "./RecipeDetail/RecipeDetail";
import Header from "../Header/Header";
import style from "./Detail.module.css";

function Detail() {
  return (
    <div className={style.details_component}>
      <Header />
      <RecipeDetail />
    </div>
  );
}

export default Detail;
