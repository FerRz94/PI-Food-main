import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_DETAILS = "GET_DETAILS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_HEALTH = "ORDER_BY_HEALTH";
export const GET_BY_NAME = "GET_BY_NAME";
export const FILTER_CREATED = "FILTER_CREATED";
export const GET_DIETS = "GET_DIETS";
export const FILTER_RECIPE = "FILTER_RECIPE";
export const RECIPE_POST = "RECIPE_POST";

export const getRecipes = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("http://localhost:3001/recipes");
      const recipes = apiData.data;
      dispatch({ type: GET_RECIPES, payload: recipes });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const apiDataId = await axios.get(`http://localhost:3001/recipes/${id}`);
      console.log(apiDataId.data);
      const details = apiDataId.data;
      dispatch({ type: GET_DETAILS, payload: details });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRecipesByName = (name) => {
  return async function (dispatch) {
    try {
      const apiDataByName = await axios.get(
        `http://localhost:3001/recipes?name=${name}`
      );
      const byName = apiDataByName.data;
      dispatch({
        type: GET_BY_NAME,
        payload: byName,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("http://localhost:3001/diets");
      const allDiets = apiData.data.map((e) => e);
      dispatch({ type: GET_DIETS, payload: allDiets });
    } catch (error) {
      console.log(error);
    }
  };
};

export const recipePost = (payload) => {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/recipes", payload);
      alert("Recipe created successfully");
      return dispatch({
        type: RECIPE_POST,
      });
    } catch (error) {
      console.log(error);
      alert("Recipe not created");
    }
  };
};

export const filterRecipe = (payload) => {
  return {
    type: FILTER_RECIPE,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByHealth = (payload) => {
  return {
    type: ORDER_BY_HEALTH,
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};
