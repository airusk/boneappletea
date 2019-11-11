import{
  RECEIVE_ALL_INGREDIENTS
} from '../actions/ingredient_actions';

const ingredientsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_ALL_INGREDIENTS:
      return action.ingredients;
    default:
      return oldState;
  }
}

export default ingredientsReducer;