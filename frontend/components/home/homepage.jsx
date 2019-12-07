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
    // let mainBody = main ? main.body : null;
    // const re = new RegExp('/^ (.*?)[.? !]\s');
    // let mainText = re.exec(mainBody);

    return(
      <div className = "page-home" >
        <div className="home-card">
          <div className="featured-recipe">
            <div className="featured-image">
              <Link>
                <img src={mainImage}/>
              </Link>
            </div>
            <div className="featured-description">
              <Link>
                <h1 className="title">{mainTitle}</h1>
              </Link>
              <p className="copy">
                Skirt steak is one of our all-time favorite cuts-- 
                and crispy-edged, olive oil-fried eggs? 
                Breakfast for dinner never looked so good.
              </p>
            </div>
          </div>
        </div>
        <div className="home-card">
          <div className="featured-gallery">
            <div className="gallery-item item-0">
              <div className="gallery-image">
                image here
              </div>
              <div className="gallery-title">
                title here
              </div>
            </div>
            <div className="gallery-item item-1">
              <div className="gallery-image">
                image here
              </div>
              <div className="gallery-title">
                title here
            </div>
            </div>
            <div className="gallery-item item-2">
              <div className="gallery-image">
                image here
              </div>
              <div className="gallery-title">
                title here
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Homepage.defaultProps = {
  recipes:[]
}


export default Homepage;