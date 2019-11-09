import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_RECIPE
} from '../actions/recipe_actions';

const recipesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({},oldState);
  // debugger
  switch(action.type){
    case RECEIVE_ALL_RECIPES:
      return action.recipes;
    case RECEIVE_RECIPE:
      nextState[action.recipe.id] = action.recipe;
      return nextState;
    default:
      return oldState;
  }
}

export default recipesReducer;