import{
  RECEIVE_ALL_STEPS
} from '../actions/step_actions';

const stepsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_ALL_STEPS:
      return action.steps;
    default:
      return oldState;
  }
}

export default stepsReducer;