import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = (comment) => {
  return({
    type: RECEIVE_COMMENT,
    comment
  })
};

export const createComment = (formComment, recipeId) => dispatch => {
  debugger
  (
  CommentAPIUtil.createComment(formComment, recipeId)
    .then(comment => (dispatch(receiveComment(comment))),
    ), error => (
      dispatch(receiveErrors(error.responseJSON))
    )
)};