import React from "react";
import { filterCreated } from "../../../redux/actions";
import { useDispatch } from "react-redux";

function FilterCreated({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();

  function handleSelect(e) {
    const value = e.target.value;
    setCurrentPage(1);
    dispatch(filterCreated(value));
  }

  return (
    <div>
      <select onChange={handleSelect}>
        <option selected disabled>
          Selecciona uno
        </option>
        <option value="All">Todos</option>
        <option value="Api">API</option>
        <option value="creados">Base de datos</option>
      </select>
    </div>
  );
}

export default FilterCreated;
