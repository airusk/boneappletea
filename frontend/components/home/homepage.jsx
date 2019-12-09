import React from 'react';
import { Link } from 'react-router-dom';
import GithubSVG from '../icons/github-icon';
import LinkedinSVG from '../icons/linkedin-icon';
import EmailSVG from '../icons/email_icon';
import PortfolioSVG from '../icons/portfolio-icon';

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
            <Link href="/recipes/" className="recipe subheading">Recipes</Link>
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
            <Link href="/recipes/" className="recipe subheading">Recipes</Link>
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
                    These summery tacosrely on our go-to fish-cooking 
                    method—slow-roast, baby!
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="half-card">
          <div className="credits-box">
            <div className="credits">
              <a href="https://github.com/airusk/boneappletea" target="_blank">
                <GithubSVG width="60" className="credit-icon"/>
              </a>
              <a href="https://linkedin.com/airusk" target="_blank">
                <LinkedinSVG width="60" className="credit-icon" />
              </a>
              <a href="mailto: nsuriawijaya@gmail.com" target="_blank">
                <EmailSVG width="64" className="credit-icon" />
              </a>
              <a href="https://airusk.carbonmade.com" target="_blank">
                <PortfolioSVG width="64" className="portfolio" />
              </a>
            </div>
          </div>
          <p className="credits-tagline">
            #airusk
          </p>
        </div>
      </div>
    )
  }
}

export default Homepage;