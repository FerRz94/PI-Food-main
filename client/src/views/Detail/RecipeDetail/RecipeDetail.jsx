import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../../redux/actions";
import { useEffect } from "react";
import style from "./RecipeDetail.module.css";

const RecipeDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const recipeDetail = useSelector((state) => state.details);
  console.log(recipeDetail);
  return (
    <div className={style.recipeDetail}>
      <div className={style.left}>
        <div className={style.profile}>
          <div className={style.div_recipe_profile}>
            <img
              className={style.image_recipe_profile}
              src={recipeDetail[0]?.img}
              alt="recipe"
            />
          </div>
          <div className={style.div_recipe_name}>
            <h2 className={style.name_recipe}>{recipeDetail[0]?.title}</h2>
            <span className={style.sobre_recipe}>DETAILS</span>
          </div>
        </div>

        <div className={style.table_container}>
          <table>
            <tr>
              <th className={style.encabezado_tabla}>CARACTERISTICAS</th>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>TYPE DIETS</td>
              <td className={style.table_datos}>
                {recipeDetail[0]?.typeDiets.map((d) => d.name)}
              </td>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>DISH TYPES</td>
              <td className={style.table_datos}>
                {recipeDetail[0]?.dishTypes.map((d) => d.name)}
              </td>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>SUMMARY</td>
              <td className={style.table_datos}>
                {recipeDetail[0]?.summary.replace(/<[^>]*>/g, "")}
              </td>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>STEPS</td>
              <td className={style.table_datos}>
                {recipeDetail[0]?.analyzedInstructions.map((e) =>
                  e.steps.map((f) => f.step)
                )}
              </td>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>HEALTH SCORE</td>
              <td className={style.table_datos}>
                {recipeDetail[0]?.healthScore}
              </td>
            </tr>
          </table>
        </div>
      </div>
      {/* 
    <div className="right">
      <div className="div_banner">
        <img className="banner" src={banner} alt="banner" />
      </div>
    </div> */}
    </div>
  );
};

export default RecipeDetail;
