import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesByName } from "../../../redux/actions";
import search_icon from "../../../images/search-icon.svg";
import style from "./SearchBar.module.css";
import { Link } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();

  const [nameRecipe, setNameRecipe] = useState("");

  const recipesHome = useSelector((state) => state.recipesHome);

  function handleChange(e) {
    setNameRecipe(e.target.value);
    if (nameRecipe && nameRecipe) {
      dispatch(getRecipesByName(nameRecipe));
    }
  }

  function handleClick() {
    setNameRecipe("");
  }
  
  return (
    <div className={style.searchBar_Container}>
      <div className={style.divInput_SearchBar}>
        <div className={style.div_button_search}>
          <img className={style.searchIcon} src={search_icon} alt="search" />
        </div>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Buscar"
          onChange={handleChange}
          value={nameRecipe}
        />
        <button
          className={
            nameRecipe.length > 0 ? style.cleaner.active : style.cleaner
          }
          onClick={handleClick}
        >
          x
        </button>
      </div>

      <div
        className={
          nameRecipe.length !== 0
            ? style.divSearchBar_Results.active
            : style.divSearchBar_Results
        }
      >
        <div className={style.div_nameResult}>
          {nameRecipe &&
            recipesHome.slice(0, 10).map((d, i) => {
              return (
                <div>
                  <Link
                    className={style.results}
                    to={`/recipes/${d.id}`}
                    key={i}
                  >
                    {d.title}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
