import React from 'react';
import RecipeIndexItem from './recipe_index_item';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    this.props.fetchRecipes();
  }
  
  render() {
    const { recipes } = this.props;
    return(
      <div className="recipe-index-container">
        <header className="recipe-index-header">
          <h1 className="recipe-index-title">
            Recipes
          </h1>
          <div className="searchbar-wrapper">
            <form className="search-form">
              <input type="search" className="recipe-index-searchbar" placeholder="Find a Recipe" autoComplete="off"/>
              <input type="submit" className="search-submit" value=""/>
            </form>
          </div>
        </header>
        <div className="margin-placeholder">
        </div>
        <ul className="recipe-card-list">{
          recipes.map(recipe => (
            <RecipeIndexItem
              key={recipe.id}
              recipe={recipe}
            />
          ))
        }
        </ul>
      </div>
    );
  }
}

RecipeIndex.defaultProps= {
  recipes:{
    id:"1337",
    title:"Beep.",
    user_id:"Bop.",
    body:"Boop."
  }
}

export default RecipeIndex;