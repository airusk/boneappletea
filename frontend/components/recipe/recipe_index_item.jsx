import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './star_rating';

const RecipeIndexItem = props => (
  <li className="recipe-card">
    <img src={props.recipe.imageUrl} className="card-image" alt="boop"/>
    <div className="card-body">
      <div className="card-text">
        <h3 className="card-title">
          {props.recipe.title}
        </h3>
        <div className="card-copy">
          {props.recipe.body}
        </div>
      </div>
      <Link to={`/recipes/${props.recipe.id}`} className="recipe-button">
            See Recipe
          <div className="button-border">
          </div>
      </Link>
      {/* <StarRating rating={props.recipe.rating}/> */}
    </div>
  </li>
);
export default RecipeIndexItem;