import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions/recipe_actions';
import { fetchIngredients } from '../../actions/ingredient_actions';
import { fetchSteps } from '../../actions/step_actions';
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  ingredients: Object.values(state.entities.ingredients),
  steps: Object.values(state.entities.steps)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
  fetchIngredients: () => dispatch(fetchIngredients()),
  fetchSteps: () => dispatch(fetchSteps())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);