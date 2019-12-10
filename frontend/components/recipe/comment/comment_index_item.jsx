import React from 'react';

const CommentIndexItem = props => (
  <li className="comment-item">
    <p className="comment-rating">
      {props.comment.rating}
    </p>
    <div className="comment-body">
      {props.comment.body}
    </div>
    <footer className="comment-footer">
      <span className="comment-author">{props.comment.author}</span>
      <span className="comment-date">{props.comment.date}</span>
    </footer>
  </li>
);
export default CommentIndexItem;