import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => (
  <div className="page-home">
    <h1>
      <Link to="/recipes"> some good content</Link>
    </h1>
  </div>
)

export default Homepage;