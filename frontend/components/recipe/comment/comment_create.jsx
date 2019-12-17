import React from "react";
import ThumbsUpSVG from '../../icons/thumbs_up_icon';
import ThumbsDownSVG from '../../icons/thumbs_down_icon';
import RatingContainer from './comment_rating';

class CommentCreate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recipe_id: this.props.recipeId,
      author_id: this.props.authorId,
      again: true,
      body: "",
      rating: null,
      anonymous: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStars = this.handleStars.bind(this);
    this.updateBool = this.updateBool.bind(this);
    this.expandForm = this.expandForm.bind(this);
    this.collapseForm = this.collapseForm.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(
      {
        recipe_id: this.props.recipe.id,
        author_id: this.state.author_id,
        again: this.state.again,
        body: this.state.body,
        rating: this.state.rating,
        anonymous: this.state.anonymous
      },
      this.props.recipeId
    );
    this.setState({ body: "", rating: null});
    this.clearStars();
    this.collapseForm();
    document.getElementById("comment-form").reset();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  updateBool(field){
    return () => this.setState({ [field]: !this.state[field]})
  }

  clearStars(){
    const stars = Array.from(document.getElementsByClassName("rating-star"))
    for (let star of stars) {
      star.classList.remove("filled");
    }
  }

  handleStars(e){
    const stars = Array.from(document.getElementsByClassName("rating-star"))
    for (let star of stars){
      if (star.value < e.currentTarget.value){
        star.classList.add("filled");
      }else{
        star.classList.remove("filled");
      }
    }
    this.setState({rating: e.currentTarget.value});
  }

  expandForm(e){
    if (this.props.authorId){
      const formItems = Array.from(document.getElementsByClassName("comment-form-item"));
      for (let formItem of formItems){
        formItem.classList.remove("hidden");
      }
    }else{
      this.props.openModal('login');
    }
  }

  collapseForm(e){
    const formItems = Array.from(document.getElementsByClassName("comment-form-item"));
    for (let formItem of formItems) {
      if (!Array.from(formItem.classList).includes("point-of-interaction"))
        formItem.classList.add("hidden");
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="comment-form" id="comment-form">
          <div className="comment-form-item hidden">
            <label>
              <p className="again-question">
                Would you ever make this recipe again?
              </p>
              <div className="again-buttons">
                <label className="yes-again-label">
                  <input 
                    type="radio" 
                    name="again" 
                    id="yes"
                    value="true"
                    onChange={this.update('again')}
                    defaultChecked
                  /> 
                  <span className="wrappable">
                    Yes!
                    <ThumbsUpSVG className="thumbs up"/>
                  </span>
                </label>
                <label className="no-again-label">
                  <input 
                    type="radio" 
                    name="again" 
                    id="no"
                    value="false"
                    onChange={this.update('again')}
                  />
                  <span className="wrappable">
                    Nope
                    <ThumbsDownSVG className="thumbs down" />
                  </span>
                </label>
              </div>
            </label>
          </div>
          <div className="comment-form-item point-of-interaction">
            <textarea
              cols="30" 
              rows="10" 
              placeholder="Write a review..." 
              value={this.state.body}
              onClick={this.expandForm}
              onChange={this.update('body')}
              className="comment-text-form">
            </textarea> 
          </div>
          <div className="comment-form-item hidden">
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
                  onClick={this.handleStars}
                />
              </label>
              <label className="rating-2-radio">
                <input
                  className="rating-star"
                  type="radio"
                  name="rating"
                  id="rating-2-radio"
                  value="2"
                  onClick={this.handleStars}
                />
              </label>
              <label className="rating-3-radio">
                <input
                  className="rating-star"
                  type="radio"
                  name="rating"
                  id="rating-3-radio"
                  value="3"
                  onClick={this.handleStars}
                />
              </label>
              <label className="rating-4-radio">
                <input
                  className="rating-star"
                  type="radio"
                  name="rating"
                  id="rating-4-radio"
                  value="4"
                  onClick={this.handleStars}
                />
              </label>
              <label className="rating-5-radio">
                <input
                  className="rating-star"
                  type="radio"
                  name="rating"
                  id="rating-5-radio"
                  value="5"
                  onClick={this.handleStars}
                />
              </label>
            </div>
          </div>
          <div className="comment-form-item hidden">
            <label className="display-username">
              <input type="checkbox" onChange={this.updateBool('anonymous')}/>
              Display my username with review
            </label>
          </div>
          <div className="comment-form-item hidden">
            <div className="comment-form-buttons">
              <button className="cancel-button" type="button" onClick={this.collapseForm}>Cancel </button>
              <button className="save-button" type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
CommentCreate.defaultProps = {
  recipe:{
    id:404
  }
}

export default CommentCreate;