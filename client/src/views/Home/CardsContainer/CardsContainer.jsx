import { React, useEffect } from "react";
import Card from "./Card/Card";
import Loader from "../Loader/Loader";
import style from "../CardsContainer/CardsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../../redux/actions";
import Pagination from "../Pagination/Pagination";

function CardsContainer({
  currentPage,
  setCurrentPage,
  recipesPerPage,
  indexOfFirstRecipe,
  indexOfLastRecipe,
}) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const CurrentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const paginate = (page) => {
    setCurrentPage(page);
  };

  function Cards() {
    return CurrentRecipes.map((recipes, i) => (
      <Link
        to={`/recipes/${recipes.id}`}
        key={i}
        className={style.link_all_cards}
      >
        <Card
          title={recipes.title}
          typeDiets={recipes.typeDiets}
          healthScore={recipes.healthScore}
          img={recipes.img}
        />
      </Link>
    ));
  }

  return (
    <div className={style.AllCards_component}>
      <div className={style.AllCards}>
        {recipes.length !== 0 ? Cards() : <Loader />}
      </div>
      <Pagination
        recipesPerPage={recipesPerPage}
        totalPosts={recipes.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
export default CardsContainer;
