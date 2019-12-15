import { connect } from 'react-redux';
import CommentCreate from './comment_create';
import { createComment } from '../../../actions/comment_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.entities.recipes[ownProps.recipeId],
    authorId: state.session.id,
  }
};

const mapDispatchToProps = dispatch => ({
  action: (comment, recipeId) => {
    return dispatch(createComment(comment, recipeId));
  },
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreate);