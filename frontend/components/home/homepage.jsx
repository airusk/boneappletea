import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => (
  <div className="page-home">
    <div className="featured-recipe">
      <div className="featured-image">
        image here
      </div>
      <div className="featured-description">
        description here
      </div>
    </div>
    <h1>
      <Link to="/recipes"> some good content</Link>
    </h1>
  </div>
)

export default Homepage;