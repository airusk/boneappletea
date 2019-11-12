import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';

const filterEntities = (recipeComponents, recipeId) => {
  debugger
  let filteredComponents = [];
  for (const componentId in recipeComponents){
    if (recipeComponents[componentId]["recipeId"] === parseInt(recipeId)){
      filteredComponents.push(recipeComponents[componentId]);
    }
  }
  return filteredComponents;
};

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  ingredients: filterEntities((state.entities.ingredients),ownProps.match.params.recipeId),
  steps: filterEntities((state.entities.steps),ownProps.match.params.recipeId)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);