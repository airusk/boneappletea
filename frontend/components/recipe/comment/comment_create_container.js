import { connect } from 'react-redux';
import CommentCreate from './comment_create';
import { createComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.recipeId],
  authorId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  action: (comment, recipeId) => {
    debugger
    dispatch(createComment(comment, recipeId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreate);