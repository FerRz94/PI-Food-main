import { React, useState } from "react";
import CardsContainer from "./CardsContainer/CardsContainer";
import Header from "../Header/Header";
import Filters from "./Filters/Filters";
import ButtonCreateRecipe from "./ButtonCreateRecipe/ButtonCreateRecipe";
import { useDispatch } from "react-redux";
import { orderByName, orderByHealth } from "../../redux/actions";
import style from "../Home/Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  // const recipes = useSelector((state) => state.recipes);

  //cuando se monta, que haga el Dispatch.
  // con useEffect () manejamos el ciclo de vida de este componente.
  // con useDispatch () hace el dispatch.
  function handleChange(e) {
    const value = e.target.value;
    if (value === "name_asc" || value === "name_des") {
      dispatch(orderByName(value));
    }
    if (value === "score_asc" || value === "score_des") {
      dispatch(orderByHealth(value));
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  return (
    <body>
      <div>
        <Header />
        <div className={style.home}>
          <div className={style.home_options}>
            <ButtonCreateRecipe />
            <div className={style.div_filtro_ordernamineto}>
              <Filters
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <div className={style.div_ordernamiento}>
                <span className={style.ordenar_text}>Ordernar por :</span>
                <select
                  className={style.select_ordernamiento}
                  onChange={handleChange}
                >
                  <option className={style.option_name} value="name_asc">
                    Nombre (asc)
                  </option>
                  <option className={style.option_name} value="name_des">
                    Nombre (des)
                  </option>
                  <option className={style.option_name} value="score_asc">
                    Health Score (asc)
                  </option>
                  <option className={style.option_name} value="score_des">
                    Health Score (des)
                  </option>
                </select>
              </div>
            </div>
          </div>
          <CardsContainer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            recipesPerPage={recipesPerPage}
            indexOfFirstRecipe={indexOfFirstRecipe}
            indexOfLastRecipe={indexOfLastRecipe}
          />
        </div>
      </div>
    </body>
  );
};

export default Home;
