import { recipeTypes } from "./recipe.types";

const INITIAL_STATE = {
  recipe: null,
  err: null,
  category: null,
  detail: null,
  search: [],
  searchErr: null
};

export const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case recipeTypes.FETCH_INITIAL_SUCCESS:
      return {
        ...state,
        recipe: action.payload,
        err: null
      };
    case recipeTypes.FETCH_INITIAL_FAILURE:
      return {
        ...state,
        err: action.payload
      };
    case recipeTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        err: null,
        category: action.payload
      };
    case recipeTypes.FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        err: action.payload
      };
    case recipeTypes.FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        err: null,
        detail: action.payload
      };
    case recipeTypes.FETCH_DETAIL_FAILURE:
      return {
        ...state,
        err: action.payload
      };
    case recipeTypes.SEARCH_RECIPE_SUCCESS:
      return {
        ...state,
        search: action.payload,
        searchErr: null
      };
    case recipeTypes.SEARCH_RECIPE_SUCCESS:
      return {
        ...state,
        searchErr: action.payload
      };
    default:
      return state;
  }
};
