import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipe_actions';
import Homepage from './homepage';

const mapStateToProps = state => ({
  recipes: Object.values(state.entities.recipes)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);