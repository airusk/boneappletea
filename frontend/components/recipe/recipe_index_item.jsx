import React from 'react';

const RecipeIndexItem = props => (
  <li className="step-item">
    {props.recipe.title}
  </li>
);
export default RecipeIndexItem;