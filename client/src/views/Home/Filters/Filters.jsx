import React, { useState } from "react";
import style from "./Filters.module.css";
import icon from "../../../images/icon_filtro.svg";
import FilterCreated from "./FilterCreated";
import FilterDiets from "./FilterDiets";

function Filters({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className={style.filter}>
      <div className={style.div_button_filter}>
        <button className={style.button_filter} onClick={handleClick}>
          <img className={style.icon_filter} src={icon} alt="filter" />
          Filters
        </button>
      </div>
      {open && (
        <div className={style.div_filters_relative}>
          <div className={style.div_filters}>
            <div className={style.div_fil}>
              <span className={style.filter_name}>Creado en</span>
              <FilterCreated
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div className={style.div_fil}>
              <span className={style.filter_name}>Type Diets</span>
              <FilterDiets
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;
