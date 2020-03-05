import { recipeTypes } from "./recipe.types";

export const fetchInitial = () => {
  return async dispatch => {
    try {
      const rawRes = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const res = await rawRes.json();
      dispatch({
        type: recipeTypes.FETCH_INITIAL_SUCCESS,
        payload: res
      });
    } catch (err) {
      dispatch({
        type: recipeTypes.FETCH_INITIAL_FAILURE,
        payload: err
      });
    }
  };
};

export const fetchCategory = query => {
  return async dispatch => {
    try {
      const rawRes = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`
      );
      const res = await rawRes.json();
      dispatch({
        type: recipeTypes.FETCH_CATEGORY_SUCCESS,
        payload: res
      });
    } catch (err) {
      dispatch({
        type: recipeTypes.FETCH_CATEGORY_SUCCESS,
        payload: res
      });
    }
  };
};

export const fetchDetail = id => {
  return async dispatch => {
    try{
      const rawRes = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const res = await rawRes.json();

      dispatch({
        type: recipeTypes.FETCH_DETAIL_SUCCESS,
        payload: res
      })
    }catch(err){
      dispatch({
        type: recipeTypes.FETCH_DETAIL_FAILURE,
        payload: err
      })
    }
  }
};

export const searchRecipe = query => {
  return async dispatch => {
    try{
      const rawRes = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const res = await rawRes.json();

      dispatch({
        type: recipeTypes.SEARCH_RECIPE_SUCCESS,
        payload: res
      })
    }catch(err){
      dispatch({
        type: recipeTypes.SEARCH_RECIPE_FAILURE,
        payload: err 
      })
    }
  }
}
