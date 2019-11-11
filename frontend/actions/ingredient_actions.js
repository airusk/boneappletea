import * as IngredientApiUtil from '../util/ingredient_api_util';

export const RECEIVE_ALL_INGREDIENTS = 'RECEIVE_ALL_INGREDIENTS';

const receiveIngredients = ingredients => ({
  type: RECEIVE_ALL_INGREDIENTS,
  ingredients
});

export const fetchIngredients = () => dispatch => {
  return IngredientApiUtil.fetchIngredients()
    .then(ingredients => dispatch(receiveIngredients(ingredients)));
};
