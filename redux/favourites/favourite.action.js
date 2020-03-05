import { favTypes } from './favourite.types';

export const toggleFav = food => ({
  type: favTypes.TOGGLE_FAV,
  payload: food
})