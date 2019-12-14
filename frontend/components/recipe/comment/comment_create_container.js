import { connect } from 'react-redux';
import CommentCreate from './comment_create';
import { createComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.entities.recipes[ownProps.recipeId],
    authorId: state.session.id,
  }
};

const mapDispatchToProps = dispatch => ({
  action: (comment, recipeId) => {
    return dispatch(createComment(comment, recipeId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreate);