import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.div`
  font-family: ${theme.primaryFontFamily};
  background-color: ${theme.secondaryColor};

  .icon {
    margin-top: 1rem;
  }

  .text {
    margin-top: 3rem;
  }
`;

const Footer = () => (
  <Conatiner>
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-two-thirds has-text-centered has-text-white	">
          <h1 className="has-text-weight-medium top ">08700 777 555</h1>
          <div>
            <div className="icon ">
              <i className="fab fa-facebook-square" />
            </div>
            <div className="icon">
              <i className="fab fa-twitter-square" />
            </div>
            <div className="icon">
              <i className="fab fa-linkedin" />
            </div>
          </div>
          <p className="text">©2019 by EcoVend Reverse Vending.</p>
        </div>
      </div>
    </section>
  </Conatiner>
);

export default Footer;
