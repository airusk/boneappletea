import { RECEIVE_RECIPE } from '../actions/recipe_actions';

const commentsReducer =  (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_RECIPE:
      return Object.assign(nextState, action.payload.comments);
    default:
      return oldState;
  }
}

export default commentsReducer;