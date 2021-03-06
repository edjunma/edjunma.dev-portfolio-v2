import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';
import Logo from './Logo';

const Navigation = styled.nav`
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  border-bottom: 2px solid #33333320;
  padding: 2rem;
  margin: 0 auto;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  align-self center;

  @media (max-width: 768px) {
    position: sticky;
    height: 10vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 2rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 10vh;
    cursor: pointer;
    left: ${props => (props.open ? '-100%' : '0')};
  }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-items: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props => (props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)')};
    top: -10px;
    right: 0.5px;
  }
  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
    right: 0.5px;
  }
`;

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      <Logo />
      <Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;
