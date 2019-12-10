import React from "react";

class CommentCreate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recipe_id: this.props.recipeId,
      again: true,
      body: "",
      rating: null,
      anonymous: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="comment-form">
          <div className="comment-form-item">
            <label>Would you ever make this recipe again?
              <input type="radio" name="again" id="yes"/> Yes!
              <input type="radio" name="again" id="no"/> Nope
            </label>
          </div>
          <div className="comment-form-item">
            <textarea
              cols="30" 
              rows="10" 
              placeholder="Write a review..." 
              value={this.state.body} 
              onChange={this.update('body')}>
            </textarea> 
          </div>
          <div className="comment-form-item">
            <div>Rate This Recipe:
              <label className="rating-1-radio">
                <input 
                  className= "rating-star"
                  type="radio" 
                  name="rating" 
                  id="rating-1-radio" 
                  value="1"
                />
              </label>
              <label className="rating-2-radio">
                <input
                  className="rating-star"
                  type="radio"
                  name="rating"
                  id="rating-2-radio"
                  value="2"
                />
              </label>
              <label className="rating-3-radio">
                <input
                  className="rating-star"
                  type="radio"
                  name="rating"
                  id="rating-3-radio"
                  value="3"
                />
              </label>
              <label className="rating-4-radio">
                <input
                  className="rating-star"
                  type="radio"
                  name="rating"
                  id="rating-4-radio"
                  value="4"
                />
              </label>
              <label className="rating-5-radio">
                <input
                  className="rating-star"
                  type="radio"
                  name="rating"
                  id="rating-5-radio"
                  value="5"
                />
              </label>
            </div>
          </div>
          <div className="comment-form-item">
            <label for="display-username">
              <input type="checkbox" value="on"/>
              Display my username with review
            </label>
          </div>
          <div className="comment-form-item">
            <div className="comment-form-buttons">
            <button className="cancel-button" type="button" value="Cancel"/>
            <button className="save-button" type="submit" value="Save"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentCreate;