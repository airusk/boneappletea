import React from 'react';
import GithubSVG from '../icons/github-icon';
import LinkedinSVG from '../icons/linkedin-icon';
import EmailSVG from '../icons/email_icon';
import PortfolioSVG from '../icons/portfolio-icon';

const FooterContainer = () => (
  <div className="half-card">
    <div className="credits-box">
      <div className="credits">
        <a href="https://github.com/airusk/boneappletea" target="_blank">
          <GithubSVG width="60" className="credit-icon" />
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
);

export default FooterContainer;