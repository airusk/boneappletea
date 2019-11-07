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

    const sessionLinks = () => (
      <nav className="navigation-bar">
        <Link to="/" className="logo">
          <img src="/assets/src/logo.png"/>
        </Link>
        <div className="link-sessions">
          <a onClick={() => this.props.openModal('login')}>LOGIN</a>
          <a onClick={() => this.props.openModal('signup')}>SIGNUP</a>
        </div>
      </nav>
    );

    const greeting = this.props.user ?
      (
        <div>
          {/* <h4>Welcome, {this.props.user.name}!</h4> */}
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      ) : (
        sessionLinks()
      )
    return (
      greeting
    )
  }
}

export default Greeting;