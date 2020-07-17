import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavItem = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
  color: #0594ec;
  padding: 0.5rem;
  margin: 0 1vw;
  letter-spacing: 1px;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: orange;
    height: 2px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: orange;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

const NavBlog = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
  color: red;
  padding: 0.5rem;
  margin: 0 1vw;
  letter-spacing: 1px;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: red;
    height: 2px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: red;
    transform: translateY(-5px);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/#about">About</NavItem>
      <NavItem to="/#projects">Projects</NavItem>
      <NavItem to="/#contact">Contact</NavItem>
      <NavBlog>
        <a
          href="https://ejm-gatsby-dev-blog.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-chalkboard-teacher fas-fw" />
          Blog
        </a>
      </NavBlog>
    </>
  );
};

export default NavbarLinks;
