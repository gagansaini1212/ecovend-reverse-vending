import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import theme from '../utils/theme';

const Conatiner = styled.div`
  font-family: ${theme.primaryFontFamily};
  background-color: ${theme.secondaryColor};
  margin-top: -2rem;

  @media only screen and (max-width: 768px) {
    margin-top: 0rem;
  }

  .icon {
    margin-top: 1rem;
  }

  .text {
    margin-top: 3rem;
  }
`;

const LinkStyled = styled(AnchorLink)`
  color: #fff;
  margin: 0rem 0.5rem 0rem 0.5rem;
  :hover {
    color: #fff;
  
`;

const Footer = () => (
  <Conatiner>
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-two-thirds has-text-centered has-text-white	">
          <h1 className="has-text-weight-medium top ">08700 777 555</h1>
          <div className="icon">
            <LinkStyled>
              <i className="fab fa-facebook-square" />
            </LinkStyled>
            <LinkStyled>
              <i className="fab fa-twitter-square" />
            </LinkStyled>
            <LinkStyled>
              <i className="fab fa-linkedin" />
            </LinkStyled>
          </div>
          <p className="text">©2019 by EcoVend Reverse Vending.</p>
        </div>
      </div>
    </section>
  </Conatiner>
);

export default Footer;
