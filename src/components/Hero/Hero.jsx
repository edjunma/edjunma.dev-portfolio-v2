import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const burger = document.getElementById('burger');
  const ul = document.querySelector('nav ul');

  window.onload = function() {
    burger.addEventListener('click', () => {
      burger.classList.toggle('show-x');
      ul.classList.toggle('show');
    });
  };

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
          {/* <img alt="logo" className="logo" src="../../images/logo.png" /> */}
          <a href="https://github.com/edjunma">
            <p>&#60;EJM&#62;</p>
          </a>

          {/* Mobile Hamburger Navigation Menu */}
          <button id="burger" className="burger" type="button">
            <div className="bar" />
            <div className="bar" />
          </button>

          {/* Navigation Bar */}
          <ul>
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

        {/* Light/Dark Mode Button Toggle */}

        {/* Hero */}
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-secondary">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
            <span className="text-color-main">Front-End Developer</span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <a className="grd-btn" href="#about">
              {cta || 'Know more'}
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
