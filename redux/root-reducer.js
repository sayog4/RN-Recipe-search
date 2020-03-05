import { recipeReducer } from './recipe/recipe.reducer';

import { combineReducers } from 'redux';
import { favouriteReducer } from './favourites/favourite.reducer';


export const rootReducer = combineReducers({
  recipe: recipeReducer,
  favourite: favouriteReducer
});
