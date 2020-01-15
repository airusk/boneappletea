import React from 'react';
import RecipeIndexItem from './recipe_index_item';
import { withRouter } from 'react-router-dom';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchRecipes();
    window.scrollTo(0, 0);
  }

  handleSubmit(e){
    e.preventDefault();
    const { history } = this.props;
    // history.push(`/search/?tag=${this.state.search}`);
    this.props.fetchSearch(this.state.search);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }
  
  render() {
    const { recipes } = this.props;
    return(
      <div className="recipe-index-container">
        <header className="recipe-index-header">
          <h1 className="recipe-index-title">
            Recipes
          </h1>
          <div className="searchbar-wrapper">
            <form className="search-form" onSubmit={this.handleSubmit}>
              <input 
                type="search" 
                className="recipe-index-searchbar" 
                placeholder="Find a Recipe" 
                autoComplete="off" 
                onChange={this.update('search')}
                value={this.state.search}
              />
              <input type="submit" className="search-submit" value=""/>
            </form>
          </div>
        </header>
        <div className="margin-placeholder">
        </div>
        <ul className="recipe-card-list">{
          recipes.map(recipe => (
            <RecipeIndexItem
              key={recipe.id}
              recipe={recipe}
            />
          ))
        }
        </ul>
      </div>
    );
  }
}

RecipeIndex.defaultProps= {
  recipes:{
    id:"1337",
    title:"Beep.",
    user_id:"Bop.",
    body:"Boop."
  }
}

export default withRouter(RecipeIndex);