import React from 'react';
import IngredientIndexItem from './ingredient/ingredient_index_item';
import StepIndexItem from './step/step_index_item';
import { Link } from 'react-router-dom';

class RecipeShow extends React.Component{

  componentDidMount(){
    this.props.fetchRecipe(this.props.match.params.recipeId);
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.recipeId != this.props.match.params.recipeId){
      this.props.fetchRecipe(this.props.match.params.recipeId);
    }
  }

  render(){
    const { recipe, ingredients, steps } = this.props;

    const recipeHead  = (
        <div className="recipe-head-container">
          <div className="recipe-header">
            <Link to="/recipes/" className="theme subheading">Recipes</Link>
            <h1 className="title">{recipe.title}</h1>
            {/* <div className="author">
              <br />
              <p> Author ID: {recipe.userId}</p>
            </div> */}
            <div className="rating subheading">
              No Ratings Yet
            </div>
          </div>
          <div className="main-image">
            <img src={recipe.imageUrl} alt="pizza.png"/>  
          </div>
          <div className="description-header">
            <div className="story">
              {recipe.body}
            </div>
          </div>
        </div>
    );

    const recipeIngredients = (
      <div className="ingredients-container">
        <div className="ingredients-list">
          <h3>Ingredients</h3>
          <ul>{
            ingredients.map(ingredient => (
              <IngredientIndexItem
                key = {ingredient.id}
                ingredient = {ingredient}
              />        
            ))
          }
          </ul>
        </div>
      </div>
    );

    const recipeSteps = (
      <div className="steps-container">
        <div>
          <h3>Steps</h3>
          <ol>{
            steps.map(step => (
              <StepIndexItem
                key = {step.id}
                step = {step}
              />
            ))
          }  
          </ol>
        </div>
      </div>
    );
    
    const recipePage = (
      <div className="recipe-page">
        { recipeHead }
        <div className="recipe-component-container">
          { recipeIngredients }
          { recipeSteps }
        </div>
      </div>
    );
    return(
      recipePage
    );
  }
}

RecipeShow.defaultProps = {
  recipe:{
    id:"1337",
    title: "Beep.",
    user_id: "Bop.",
    body: "Boop."
  },
  ingredients:{
    id: "1337",
    text: "Beep.",
    recipe_id: "Bop.",
    ord: "Boop."
  },
  steps:{
    id: "1337",
    body: "Beep.",
    recipe_id: "Bop.",
    ord: "Boop."
  }
}

export default RecipeShow;