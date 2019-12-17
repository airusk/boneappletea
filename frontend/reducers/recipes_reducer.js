import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_RECIPE,
  RECEIVE_SEARCH,
} from '../actions/recipe_actions';

const recipesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({},oldState);
  switch(action.type){
    case RECEIVE_ALL_RECIPES:
      return action.payload;    
    case RECEIVE_RECIPE:
      return Object.assign(nextState, action.payload.recipe);
    case RECEIVE_SEARCH:
      return action.payload;
    default:
      return oldState;
  }
}

export default recipesReducer;