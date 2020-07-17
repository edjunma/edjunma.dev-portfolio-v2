import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <Link to="/#hero" className="back-to-top-arrow" title="Back To Top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </Link>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url, title } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/edjunma'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                  title={title}
                >
                  <i className={`fab fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed with{' '}
          <span className="footer-heart" aria-label="heart" role="img">
            💖
          </span>{' '}
          &{' '}
          <span className="footer-tea" aria-label="tea" role="img">
            🍵
          </span>{' '}
          by{' '}
          <a href="https://github.com/edjunma" target="_blank" rel="noopener noreferrer">
            Edmond Ma
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
