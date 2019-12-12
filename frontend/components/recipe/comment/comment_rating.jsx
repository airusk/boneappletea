import React, { useState } from 'react';

const RatingContainer = props => {
  const [rating, setRating] = useState(props.rating);

  return (
    <div className="rating-container">
      <label className="rating-question">
        Rate This Recipe:
      </label>
      <label className="rating-1-radio">
        <input
          className="rating-star"
          type="radio"
          name="rating"
          id="rating-1-radio"
          value="1"
          onClick={() => setRating(1)}
        />
      </label>
      <label className="rating-2-radio">
        <input
          className="rating-star"
          type="radio"
          name="rating"
          id="rating-2-radio"
          value="2"
          onClick={() => setRating(2)}
        />
      </label>
      <label className="rating-3-radio">
        <input
          className="rating-star"
          type="radio"
          name="rating"
          id="rating-3-radio"
          value="3"
          onClick={() => setRating(3)}
        />
      </label>
      <label className="rating-4-radio">
        <input
          className="rating-star"
          type="radio"
          name="rating"
          id="rating-4-radio"
          value="4"
          onClick={() => setRating(4)}
        />
      </label>
      <label className="rating-5-radio">
        <input
          className="rating-star"
          type="radio"
          name="rating"
          id="rating-5-radio"
          value="5"
          onClick={() => setRating(5)}
        />
      </label>
    </div>

  );
}


export default RatingContainer;