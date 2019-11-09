import * as RecipeApiUtil from '../util/recipe_api_util';

export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';

const receiveRecipes = recipes => ({
  type: RECEIVE_ALL_RECIPES,
  recipes
});

const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
});

export const fetchRecipes = () => dispatch => {
  return RecipeApiUtil.fetchRecipes()
    .then(recipes => dispatch(receiveRecipes(recipes)));
}

export const fetchRecipe = recipeId => dispatch => {
  return RecipeApiUtil.fetchRecipe(recipeId)
    .then(recipe => dispatch(receiveRecipe(recipe)));
}