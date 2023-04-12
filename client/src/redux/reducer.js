import {
  GET_RECIPES,
  GET_DETAILS,
  ORDER_BY_NAME,
  ORDER_BY_HEALTH,
  GET_BY_NAME,
  FILTER_CREATED,
  GET_DIETS,
  FILTER_RECIPE,
  RECIPE_POST,
} from "./actions";

const initialState = {
  recipes: [],
  allRecipesFilter: [],
  details: [],
  diets: [],
  recipesHome: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        allRecipesFilter: payload,
        recipesHome: payload,
      };

    case GET_DETAILS:
      return { ...state, details: payload };

    case RECIPE_POST:
      return {
        ...state,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };

    case FILTER_RECIPE:
      const allRecipes = state.allRecipesFilter;
      const filtro =
        payload === "All"
          ? allRecipes
          : allRecipes.filter((e) =>
              e.typeDiets.find((e) => e.name.includes(payload))
            );
      return {
        ...state,
        recipes: filtro,
      };

    case FILTER_CREATED:
      const allRecipesFilter = state.allRecipesFilter;
      const createFilter =
        payload === "creados"
          ? allRecipesFilter.filter((d) => d.createdInDb)
          : allRecipesFilter.filter((d) => !d.createdInDb);
      return {
        ...state,
        recipes: payload === "All" ? allRecipesFilter : createFilter,
      };

    case GET_BY_NAME:
      return {
        ...state,
        recipesHome: payload,
      };

    case ORDER_BY_NAME:
      const orderByName =
        payload === "name_asc"
          ? state.recipes.slice().sort(function (a, b) {
              if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
              }
              if (b.title.toLowerCase() > a.title.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.recipes.slice().sort(function (a, b) {
              if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1;
              }
              if (b.title.toLowerCase() > a.title.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: orderByName,
      };

    case ORDER_BY_HEALTH:
      const orderHealthScore =
        payload === "score_asc"
          ? state.recipes.slice().sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return 1;
              }
              if (b.healthScore > a.healthScore) {
                return -1;
              }
              return 0;
            })
          : state.recipes.slice().sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return -1;
              }
              if (b.healthScore > a.healthScore) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: orderHealthScore,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
