import React from 'react';
import { Link } from 'react-router-dom';
import BarsSVG from '../icons/bars_icon';
import SearchSVG from '../icons/search_icon'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }


  render() {
    const sessionLinks = this.props.user ?
      (
        <div className="link-sessions">
          <a onClick={this.handleClick}>LOGOUT</a>
        </div>
      ) : (
        <div className="link-sessions">
          <a onClick={() => this.props.openModal('login')}>LOGIN</a>
          <a onClick={() => this.props.openModal('signup')}>SIGNUP</a>
        </div>
      );
    const nav_bar = (
      <nav className="navigation-bar">
        <div className="bars"><BarsSVG width="22"/></div>
        <Link to="/" className="logo">
          <img src={window.logoURL} />
        </Link>
        {sessionLinks}
        <div className="search"><SearchSVG width="22"/></div>
      </nav>
    )
    return (
      nav_bar
    )
  }
}

export default NavigationBar;