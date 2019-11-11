import { connect } from 'react-redux';
import { fetchIngredients } from '../../../actions/ingredient_actions';
import { fetchRecipe } from '../../../actions/recipe_actions';
// import RecipeShow from '../..recipe_show';
import RecipeShow from '../recipe_show';

const mapStateToProps = (state,ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  ingredients: Object.values(state.entities.ingredients)
});

const mapDispatchToProps = dispatch => ({
  fetchIngredients: () => dispatch(fetchIngredients()),
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId))
});

// export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);