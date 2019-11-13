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
        <ul>{
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