import React from 'react';
import { Link } from 'react-router-dom';
import BarsSVG from '../icons/bars_icon';
import SearchSVG from '../icons/search_icon';
import CloseSVG from '../icons/close_icon';


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBars = this.handleBars.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleBars(e){
    e.preventDefault();
    this.setState( {hidden: !this.state.hidden} )
  }

  handleKeyPress(e){
    if(e.keyCode === 27){
      console.log("esc pressed");
      this.handleBars(e)
    }
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
      
    let recipeLink = this.props.location.pathname !== "/recipes" ? 
    <Link to="/recipes" className="subheading">Recipes</Link> : null


    const display = this.state.hidden ? "hidden" : "visible";

    const dropdown = (
      <div className="dropdown">
        <button className="bars" onClick={this.handleBars}><BarsSVG width="22"/></button>
        <div className={`dropdown-content ${display}`}>
          <button className="icon close" onClick={this.handleBars} onKeyPress={this.handleKeyPress}><CloseSVG/></button>
          <div className="dropdown-logo-box">
            <Link to="/" className="logo-container">
              <img src={window.logo2URL} className="dropdown-logo"/>
            </Link>
          </div>
          {recipeLink}
          <a href="https://www.linkedin.com/in/nsuriawijaya/" target="_blank" className="subheading">LinkedIn</a>
          <a href="https://github.com/airusk" target="_blank" className="subheading">Github</a>
        </div>
      </div>
    );



    const nav_bar = (
      <nav className="navigation-bar">
        {dropdown}
        <Link to="/" className="logo">
          <img src={window.logoURL} />
        </Link>
        {sessionLinks}
        {/* <div className="search"><SearchSVG width="22"/></div> */}
      </nav>
    )
    return (
      nav_bar
    )
  }
}

export default NavigationBar;