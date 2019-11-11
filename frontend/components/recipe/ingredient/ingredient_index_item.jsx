import React from 'react';

const IngredientIndexItem = props => (
  <li className="ingredient-item">
    <label>
      <input type="checkbox" value={props.ingredient.id}/>
      {props.ingredient.text}
    </label>
  </li>
);
export default IngredientIndexItem;