import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, logo } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <nav>
          {/* Logo */}
          <div>
            <a id="logo" href="https://github.com/edjunma" alt="logo">
              <img alt="logo" src="../../images/logo.png" />
            </a>
          </div>
          {/* Implement Light/Dark Mode Button Toggle here in the future */}
          <div>
            <input type="checkbox" className="checkbox" id="chk" />
            <label className="label" htmlFor="chk">
              <i className="fas fa-moon" />
              <i className="fas fa-sun" />
              <div className="ball" />
            </label>
          </div>

          {/* Mobile Hamburger Menu */}
          <button className="hamburger" id="hamburger" type="button">
            <i className="fas fa-bars" />
          </button>
          {/* Navigation Bar */}
          <ul className="nav-ul" id="nav-ul">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="https://ejm-gatsby-dev-blog.netlify.com/">Blog</a>
            </li>
          </ul>
        </nav>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
            <span className="text-color-main">Front-End </span>
            Developer
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">
              {cta || 'Know more'}
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
