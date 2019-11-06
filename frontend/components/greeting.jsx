import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const greeting = this.props.user ?
      (
        <div>
          <h4>Welcome, {this.props.user.name}!</h4>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    return (
      greeting
    )
  }
}

export default Greeting;