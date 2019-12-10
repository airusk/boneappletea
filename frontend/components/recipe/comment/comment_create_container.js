import { connect } from 'react-redux';
import CommentCreate from './comment_create';
import { postComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  comment: {},
  recipeId: ownProps.match.recipeId
});

const mapDispatchToProps = dispatch => ({
  action: commment => dispatch(createComment(commment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreate);