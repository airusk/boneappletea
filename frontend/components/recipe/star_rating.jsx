import React,{ useEffect} from 'react';

const StarRating = props => {
  
  const starsArrayMath = () => {
    const rating = props.rating;
    let wholeStars = Math.floor(rating);
    let halfStar = (rating % 1 >= .25) ? 1 : 0;
    let emptyStars = (5 - (wholeStars + halfStar));
    return [wholeStars, halfStar, emptyStars];
  };
  
  useEffect(() => {
    const ratingStarsDiv = document.getElementsByClassName(
      `index-recipe-rating-stars ${props.id}`
    )[0];
    
    const starsArray = starsArrayMath();
  
    for (let i = 0; i < starsArray[0]; i++){
      const wholeStar = new Image();
      wholeStar.src = window.starFillURL;
      wholeStar.className = "recipe-star";
      ratingStarsDiv.append(wholeStar);
    }
    for (let i = 0; i < starsArray[1]; i++){
      const halfStar = new Image();
      halfStar.src = window.starHalfFillURL;
      halfStar.className = "recipe-star";
      ratingStarsDiv.append(halfStar);
    }
    for (let i = 0; i < starsArray[2]; i++){
      const emptyStar = new Image();
      emptyStar.src = window.starNoFillURL;
      emptyStar.className = "recipe-star";
      ratingStarsDiv.append(emptyStar);
    }
  },() => {ratingStarsDiv.innerHTML = ""});

  const ratingLiteral = (props.numRatings === 1) ? " Rating" : " Ratings";
  const ratingStars = (
    <div className={`index-recipe-rating-stars ${props.id}`} >
      <p className="rating-count">
        {props.numRatings}{ratingLiteral}
      </p>
    </div>
  );
  
  return(
    <div className="rating-stars-container">
      {ratingStars}
    </div>
  );
}

export default StarRating