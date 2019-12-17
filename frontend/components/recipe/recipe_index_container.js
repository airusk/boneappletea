import { connect } from 'react-redux';
import { fetchRecipes, fetchSearch } from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapStateToProps = state => {
  return({
    recipes: Object.values(state.entities.recipes)
  })
};

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  fetchSearch: tag => dispatch(fetchSearch(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);