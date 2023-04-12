import React, { useState } from "react";
import style from "./Pagination.module.css";

function Pagination({
  recipesPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const [pageNumberLimit /*  setPageNumberLimit */] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // console.log(currentPage)
  // console.log(setCurrentPage)

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleNext() {
    if (currentPage !== pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  function handlePrev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  }

  return (
    <div className={style.pagination_component}>
      <ul className={style.pagination}>
        <button className={style.page} onClick={handlePrev}>
          Prev
        </button>
        {pageNumbers &&
          pageNumbers.map((page, i) => {
            if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
              return (
                <li key={i} className={style.pagination_item}>
                  <span
                    className={
                      currentPage === style.page
                        ? style.page.active
                        : style.page
                    }
                    onClick={() => paginate(page)}
                  >
                    {page}
                  </span>
                </li>
              );
            } else {
              return null;
            }
          })}
        <button className={style.page} onClick={handleNext}>
          Next
        </button>
      </ul>
    </div>
  );
}

export default Pagination;
