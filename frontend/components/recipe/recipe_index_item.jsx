import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = props => (
  <li className="recipe-card">
    <img src={props.recipe.imageUrl} className="card-image" alt="boop"/>
    <div className="card-body">
      <h3 className="card-title">
        {props.recipe.title}
      </h3>
      <div className="card-copy">
        {props.recipe.body}
      </div>
      <Link to={`/recipes/${props.recipe.id}`} className="recipe-button">
            See Recipe
          <div className="button-border">
          </div>
      </Link>
    </div>
  </li>
);
export default RecipeIndexItem;