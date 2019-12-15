import React from 'react';
import IngredientIndexItem from './ingredient/ingredient_index_item';
import StepIndexItem from './step/step_index_item';
import CommentIndexItem from './comment/comment_index_item';
import CommentCreateContainer from './comment/comment_create_container';
import { Link } from 'react-router-dom';

class RecipeShow extends React.Component{

  constructor(props){
    super(props);
    this.drawRecipeRating = this.drawRecipeRating.bind(this);
  }

  componentDidMount(){
    this.props.fetchRecipe(this.props.match.params.recipeId)
    .then(
      () => this.drawRecipeRating()
    );
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.recipeId !== this.props.match.params.recipeId){
      this.props.fetchRecipe(this.props.match.params.recipeId);
    }
  }
  drawRecipeRating(){
    const recipeRating = document.getElementsByClassName("recipe-rating-stars")[0];
    const numericalRating = this.props.recipe.rating;
    const ratingCount = document.createElement("span");
    ratingCount.className = "rating-count";
    ratingCount.innerHTML = `${this.props.recipe.numRatings} Ratings`;
    recipeRating.appendChild(ratingCount);
    let i = 0;
    while (i < Math.floor(numericalRating)) {
      const star = document.createElement("img");
      star.src = window.starFillURL;
      star.className = "recipe-star";
      recipeRating.append(star);
      i++;
    }
    if (numericalRating % 1 >= .25) {
      const star = document.createElement("img");
      star.src = window.starHalfFillURL;
      star.className = "recipe-star";
      recipeRating.append(star);
      i++;
    }
    while (i !== 5) {
      const star = document.createElement("img");
      star.src = window.starNoFillURL;
      star.className = "recipe-star";
      recipeRating.append(star);
      i++;
    }
  }

  render(){
    const { recipe, ingredients, steps, comments } = this.props;

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
              <div className="recipe-rating-stars"></div>
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

    const recipeCommentForm = (
      <div className="comments-header">
        <h4>Reviews</h4>
        <CommentCreateContainer recipeId={this.props.recipe.id}/>
      </div>
    );

    const recipeComments = (
      <div>
        <ul className="comments-container">{
          comments.map(comment => (
            <CommentIndexItem
              key={comment.id}
              comment={comment}
            />
          ))
        }
        </ul>
      </div>
    );
    
    const recipePage = (
      <div className="recipe-page">
        { recipeHead }
        <div className="recipe-component-container">
          { recipeIngredients }
          { recipeSteps }
          { recipeCommentForm }
          { recipeComments }
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
  },
  comments:{
    id: "1337",
    rating: 404,
    again: true,
    body: "Beep.",
    recipe_id: "Bop.",
    author_id: "Boop."
  }
}

export default RecipeShow;