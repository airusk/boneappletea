import { connect } from 'react-redux';
import CommentCreate from './comment_create';
import { createComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  recipeId: state.entities.recipes[ownProps.recipeId]
});

const mapDispatchToProps = dispatch => ({
  action: (commment, recipeId) => dispatch(createComment(commment, recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreate);