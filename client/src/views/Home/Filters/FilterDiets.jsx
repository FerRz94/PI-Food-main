import React, { useEffect } from "react";
import { filterRecipe, getDiets } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function FilterDiets({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const diet = useSelector((state) => state.diets);

  function handleFilter(e) {
    const value = e.target.value;
    setCurrentPage(1);
    dispatch(filterRecipe(value));
  }

  return (
    <div>
      <select onChange={handleFilter}>
        <option selected disabled>
          Selecciona uno
        </option>
        <option value="All">All Type Diets</option>
        {diet &&
          diet.map((t, i) => {
            return (
              <option value={t.name} key={i}>
                {t}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default FilterDiets;
