import { RECEIVE_RECIPE } from '../actions/recipe_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const commentsReducer =  (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_RECIPE:
      return Object.assign(nextState, action.payload.comments);
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    default:
      return oldState;
  }
}

export default commentsReducer;