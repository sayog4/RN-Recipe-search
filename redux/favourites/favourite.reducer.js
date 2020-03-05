import { favTypes } from "./favourite.types";


const INITIAL_STATE = {
  fav: []
};

export const favouriteReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case favTypes.TOGGLE_FAV:
      const existingMeal = state.fav.find( meal => meal.idMeal === action.payload.idMeal );
      if( existingMeal ){
        const newArr = state.fav.filter( meal => meal.idMeal !== action.payload.idMeal );
        return {
          fav: newArr
        }
      }else{
        return{
          fav: [ ...state.fav, action.payload ]
        }
      }
    default:
      return state;
  }
}