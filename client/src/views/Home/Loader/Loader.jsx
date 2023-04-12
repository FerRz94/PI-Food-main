import React from "react";
import style from "./Loader.module.css";

function Loader() {
  return (
    <div className={style.loader}>
      <div className={style.card_loading}></div>
      <div className={style.card_loading}></div>
      <div className={style.card_loading}></div>
      <div className={style.card_loading}></div>
      <div className={style.card_loading}></div>
      <div className={style.card_loading}></div>
      <div className={style.card_loading}></div>
      <div className={style.card_loading}></div>
    </div>
  );
}

export default Loader;
