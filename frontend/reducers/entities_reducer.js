import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import recipesReducer from './recipes_reducer';
import ingredientsReducer from './ingredients_reducer';
import stepsReducer from './steps_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  steps: stepsReducer,
  comments: commentsReducer,
});

export default entitiesReducer;