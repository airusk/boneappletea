import React from 'react';

const CommentIndexItem = props => {

  const starsContainer = () => {
    let stars;
    switch(props.comment.rating){
      case (1):
        stars = (
          <div className="comment-rating-container">
            <img src={window.starFillURL} className="comment-star" alt="1 out of 5 stars"/>
            <img src={window.starNoFillURL} className="comment-star"/>
            <img src={window.starNoFillURL} className="comment-star"/>
            <img src={window.starNoFillURL} className="comment-star"/>
            <img src={window.starNoFillURL} className="comment-star"/>
          </div>
        );
        break;
      case (2):
        stars = (
          <div className="comment-rating-container">
            <img src={window.starFillURL} className="comment-star" alt="2 out of 5 stars" />
            <img src={window.starFillURL} className="comment-star" />
            <img src={window.starNoFillURL} className="comment-star" />
            <img src={window.starNoFillURL} className="comment-star" />
            <img src={window.starNoFillURL} className="comment-star" />
          </div>
        );
        break;
      case (3):
        stars = (
          <div className="comment-rating-container">
            <img src={window.starFillURL} className="comment-star" alt="3 out of 5 stars" />
            <img src={window.starFillURL} className="comment-star" />
            <img src={window.starFillURL} className="comment-star" />          
            <img src={window.starNoFillURL} className="comment-star" />
            <img src={window.starNoFillURL} className="comment-star" />
          </div>
        );
        break;
      case (4):
        stars = (
          <div className="comment-rating-container">
            <img src={window.starFillURL} className="comment-star" alt="4 out of 5 stars" />
            <img src={window.starFillURL} className="comment-star" />
            <img src={window.starFillURL} className="comment-star" />
            <img src={window.starFillURL} className="comment-star" />
            <img src={window.starNoFillURL} className="comment-star" />
          </div>
        );
        break;
      case (5):
        stars = (
          <div className="comment-rating-container">
            <img src={window.starFillURL} className="comment-star" alt="5 out of 5 stars" />
            <img src={window.starFillURL} className="comment-star" />
            <img src={window.starFillURL} className="comment-star" />
            <img src={window.starFillURL} className="comment-star" />
            <img src={window.starFillURL} className="comment-star" />
          </div>          
        );
        break;
      default:
        stars = (<div className="no-rating"></div>);
    }
    return stars;
  };

  return(
    <li className="comment-item">
      {/* <p className="comment-rating">
        {props.comment.rating} */}
      {starsContainer()}
      {/* </p> */}
      <div className="comment-body">
        {props.comment.body}
      </div> 
      <footer className="comment-footer">
        <span className="comment-author">{props.comment.author}</span>
        <span className="comment-date">{props.comment.date}</span>
      </footer>
    </li>
  );
};
export default CommentIndexItem;