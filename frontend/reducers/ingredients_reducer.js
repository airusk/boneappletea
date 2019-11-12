import { RECEIVE_RECIPE } from '../actions/recipe_actions';

import{
  RECEIVE_ALL_INGREDIENTS
} from '../actions/ingredient_actions';

const ingredientsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_ALL_INGREDIENTS:
      return action.ingredients;
    case RECEIVE_RECIPE:
      return Object.assign(nextState, action.payload.ingredients)
    default:
      return oldState;
  }
}

export default ingredientsReducer;