import React from "react";
import Header from "../Header/Header";
import Form from "./Form/Form";
import style from "./NewRecipe.module.css";

function NewRecipe() {
  return (
    <div className={style.new_recipe}>
      <Header />
      <Form />
    </div>
  );
}

export default NewRecipe;
