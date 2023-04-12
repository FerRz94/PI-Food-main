import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recipePost } from "../../../redux/actions";
import { getDiets } from "../../../redux/actions";
import { Link } from "react-router-dom";

import styles from "./Form.module.css";

function validar(input) {
  //Recipe Title
  // const reg = new RegExp("^[0-9]+$");
  let errors = {};
  if (!input.title) {
    errors.title = "debes ponerle un nombre";
  } else if (!/[A-Z]+$/i.test(input.title)) {
    errors.title = "solo puede contener letras";
  } else if (parseInt(input.title.length) >= 25) {
    errors.title = "debe contener menos de 25 caracteres";
  }
  // /^[A-Z]+$/i

  //Summary
  if (!input.summary) {
    errors.summary = "debes tener un resumen";
  } else if (!/[A-Z]+$/i.test(input.summary)) {
    errors.summary = "solo puede contener letras";
  } else if (parseInt(input.summary.length) < 20) {
    errors.summary = "debe contener al menos 20 caracteres o mas";
  }

  //HealthScore:

  if (!input.healthScore) {
    errors.healthScore = "health requerida";
  } else if (!/^[0-9]+$/.test(input.healthScore)) {
    errors.healthScore = "Solo puede contener numeros";
  } else if (!/^(?!$)(?:[0-9]{1,2}|100)$/gm.test(input.healthScore)) {
    errors.healthScore = "The Health Score must be between 0 and 100";
  }

  //instructions
  if (!input.analyzedInstructions) {
    errors.analyzedInstructions = "Instrucciones requeridas";
  }

  return errors;
}

function Form() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const listDiets = useSelector((state) => state.diets);
  // console.log("esto es diet", listDiets);
  const [errors, setErrors] = useState({}); // este estado local es para, las validaciones(del formulario controlado)
  const [input, setInput] = useState({
    img: "",
    title: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    typeDiets: [],
  });
  // console.log(input);
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validar({
        ...input,
        [e.target.name]: e.target.value, // me copio todo lo que venga del formulario , en el caso de que en alguno
      })
    ); // no cumpla con las validaciones, se va a poner un texto advirtiendo
  }
  function handleSelect(e) {
    setInput({
      ...input,
      typeDiets: [...input.typeDiets, e.target.value],
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(recipePost(input));
    alert("Congratulations you created a new recipe!");
    setInput({
      img: "",
      title: "",
      summary: "",
      healthScore: "",
      analyzedInstructions: "",
      typeDiets: [],
    });
  }
  function handleDelete(e) {
    setInput({
      ...input,
      typeDiets: input.typeDiets.filter((diet) => diet !== e),
    }); //este es para borrar algun tipe diet que haya elegido, va a creat un nuevo array con todos los que no sean
  } //    el elemento que le hice click

  return (
    <div className={styles.bkg}>
      <div className={styles.container}>
        <Link to="/home">
          <button className={styles.btn}>Back to the main page</button>
        </Link>
        <h1 className={styles.h1}>Create new recipe</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={styles.form}
        >
          <div>
            <label>Name </label>
            <input
              type="text"
              name="title"
              value={input.title}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.title && <p className={styles.error}>{errors.title}</p>}
          </div>

          <div>
            <label>Image URL </label>
            <input
              type="text"
              name="img"
              value={input.img}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label>Summary </label>
            <input
              type="text"
              name="summary"
              value={input.summary}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.summary && <p className={styles.error}>{errors.summary}</p>}
          </div>

          <div>
            <label>HealthScore </label>
            <input
              type="text"
              name="healthScore"
              value={input.healthScore}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.healthScore && (
              <p className={styles.error}>{errors.healthScore}</p>
            )}
          </div>
          <div>
            <label>Step by step </label>
            <input
              type="text"
              name="analyzedInstructions"
              value={input.analyzedInstructions}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <select onChange={(e) => handleSelect(e)} className={styles.select}>
            {listDiets?.map((t) => {
              return <option value={t}> {t} </option>;
            })}
          </select>
          {errors.hasOwnProperty("title") ||
          errors.hasOwnProperty("summary") ||
          errors.hasOwnProperty("healthScore") ? (
            <p className={styles.adv}>
              {" "}
              Please complete all the inputs to create your recipe
            </p>
          ) : (
            <button type="submit" className={styles.correct}>
              {" "}
              Create Recipe
            </button>
          )}
        </form>

        {input.typeDiets.map((e) => {
          return (
            <div>
              <h5 className={styles.types}>{e}</h5>
              <button className={styles.btnx} onClick={() => handleDelete(e)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
