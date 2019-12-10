import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchRecipes();
    window.scrollTo(0, 0);
  }

  render(){
    let { recipes } = this.props;
    let main = recipes[4] || null;
    let mainImage = main ? main.imageUrl : null;
    let mainTitle = main ? main.title : null;

    let gOne = recipes[0] || null;
    let gOneImage = gOne ? gOne.imageUrl : null;

    let gTwo = recipes[1] || null;
    let gTwoImage = gTwo ? gTwo.imageUrl : null;

    let gThree = recipes[3] || null;
    let gThreeImage = gThree ? gThree.imageUrl : null;

    return(
      <div className = "page-home" >
        <div className="home-card">
          <div className="index-tag">
            <Link to="/recipes/" className="recipe subheading">Recipes</Link>
          </div>
          <div className="featured-recipe">
            <div className="featured-image">
              <Link to="/recipes/5">
                <img src={mainImage}/>
              </Link>
            </div>
            <div className="featured-description">
              <Link to="/recipes/5">
                <h1 className="title">{mainTitle}</h1>
              </Link>
              <p className="copy">
                Skirt steak is one of our all-time favorite cuts- 
                and crispy-edged, olive oil-fried eggs? 
                Breakfast for dinner never looked so good.
              </p>
            </div>
          </div>
        </div>
        <div className="home-card">
          <div className="index-tag">
            <Link to="/recipes/" className="recipe subheading">Recipes</Link>
          </div>
          <div className="featured-gallery">
            <div className="gallery-item item-0">
              <div className="gallery-item-image">
                <Link to="/recipes/1">
                  <img src={gOneImage}/>
                </Link>
              </div>
              <div className="gallery-item-title">
                <Link to="/recipes/1">
                  <h1>
                    Slow-roast chicken slathered in funky-spicy-sweet gochujang
                  </h1>
                </Link>
              </div>
            </div>
            <div className="gallery-item item-1">
              <div className="gallery-item-image">
                <Link to="/recipes/2">
                  <img src={gTwoImage}/>
                </Link>
              </div>
              <div className="gallery-item-title">
                <Link to="/recipes/2">
                  <h1>
                    The sort of super-powered broth that every cook should 
                    know how to make!
                  </h1>
                </Link>
              </div>
            </div>
            <div className="gallery-item item-2">
              <div className="gallery-item-image">
                <Link to="/recipes/4">
                  <img src={gThreeImage}/>
                </Link>
              </div>
              <div className="gallery-item-title">
                <Link to="/recipes/4">
                  <h1>
                    These summery tacos rely on our go-to fish-cooking 
                    method—slow-roast, baby!
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;