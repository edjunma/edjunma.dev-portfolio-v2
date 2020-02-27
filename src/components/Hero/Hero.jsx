import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
          <img alt="logo" className="logo" src="../../images/logo.png" />
          {/* Mobile Hamburger Menu */}
          <button className="hamburger" id="hamburger">
            <i className="fas fa-bars" />
          </button>
          {/* Light/Dark Mode Button Toggle */}

          {/* Navigation Bar */}
          <ul className="nav-ul" id="nav-ul">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="https://ejm-gatsby-dev-blog.netlify.com/" className="nav-link">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero */}
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-secondary">{name || 'Your Name'}</span>
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
