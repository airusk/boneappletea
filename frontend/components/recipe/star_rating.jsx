import React from 'react';

const StarRating = props => {
  const starCreator = rating => {
    if (numericalRating) {
      const singular = (numRatings === 1) ? "Rating" : "Ratings"
      ratingCount.innerHTML = `${numRatings} ${singular}`;
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
    } else {
      ratingCount.innerHTML = "No Ratings Yet";
    }
  }
  return(
  <div className="recipe-rating-stars">
    {props.rating}
  </div>
  );
}

export default StarRating