import React from "react";
import { Link } from "react-router-dom";
import style from "./ButtonCreateRecipe.module.css";
import recipe from "../../../images/recipe-button.png";

function ButtonCreateRecipe() {
  return (
    <Link to="/create" className={style.button_crear_recipe}>
      <p className={style.text_button}>
        Crear nueva <span className={style.text_button_naranja}>receta</span>
      </p>
      <img
        className={style.recipe_button_create}
        src={recipe}
        alt="create recipe"
      />
    </Link>
  );
}

export default ButtonCreateRecipe;
