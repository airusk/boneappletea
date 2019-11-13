import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = props => (
  <li className="recipe-card">
    {/* <div className="recipe-card"> */}
      <div className="card-image">
        {props.recipe.id}_image.jpeg
      </div>
      <div>
        <div className="card-body">
          <h3 className="card-title">
            {props.recipe.title}
          </h3>
          <div className="card-copy">
            {props.recipe.body}
          </div>
          <Link to={`/recipes/${props.recipe.id}`} className="recipe-button">See Recipe</Link>
        </div>
      </div>
    {/* </div> */}
  </li>
);
export default RecipeIndexItem;