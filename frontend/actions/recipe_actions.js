import * as RecipeApiUtil from '../util/recipe_api_util';

export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

const receiveRecipes = payload => ({
  type: RECEIVE_ALL_RECIPES,
  payload
});

const receiveRecipe = payload => ({
  type: RECEIVE_RECIPE,
  payload
});

const receiveSearch = payload => ({
  type: RECEIVE_SEARCH,
  payload
})

export const fetchRecipes = () => dispatch => {
  return RecipeApiUtil.fetchPayload()
    .then(payload => dispatch(receiveRecipes(payload)));
};

export const fetchRecipe = recipeId => dispatch => {
  return RecipeApiUtil.fetchRecipe(recipeId)
    .then(payload => dispatch(receiveRecipe(payload)));
};

export const fetchSearch = tag => dispatch => {
  return RecipeApiUtil.fetchSearch(tag)
    .then(payload => dispatch(receiveSearch(payload)));
};