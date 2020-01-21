import React from 'react';
import GithubSVG from '../icons/github-icon';
import LinkedinSVG from '../icons/linkedin-icon';
import EmailSVG from '../icons/email_icon';
import AngellistSVG from '../icons/angellist-icon';
import PortfolioSVG from '../icons/portfolio-icon';

const FooterContainer = () => (
  <div className="credit-card">
    <div className="logo-box">
      <img src={window.logo2URL} className="logo"/>
    </div>
    <div className="logo-box">
      <div className="credits">
        <a href="https://github.com/airusk" target="_blank">
          <GithubSVG width="30" className="credit-icon" />
        </a>
        <a href="https://www.linkedin.com/in/ksuriawijaya/" target="_blank">
          <LinkedinSVG width="30" className="credit-icon" />
        </a>
        <a href="https://angel.co/ksuriawijaya" target="_blank">
          <AngellistSVG width="29" className="credit-icon" />
        </a>
        <a href="mailto: ksuriawijaya@gmail.com" target="_blank">
          <EmailSVG width="30" className="credit-icon" />
        </a>
        <a href="https://airusk.carbonmade.com" target="_blank">
          <PortfolioSVG width="30" className="portfolio" />
        </a>
      </div>
    </div>
    <div className="technologies-box">
      <h2 className="technology header">Technologies</h2>
      <p className="technology">Ruby on Rails</p>
      <p className="technology">React &amp; Redux</p>
      <p className="technology">HTML5</p>
      <p className="technology">CSS3</p>
      <p className="technology">PostgresSQL</p>
      <p className="technology">AWS</p>
      <a className="technology about" href="https://github.com/airusk/boneappletea" target="_blank">
        About
      </a>
    </div>
    {/* <p className="credits-tagline">
      #airusk
    </p> */}
  </div>
);

export default FooterContainer;