import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.section`
  font-family: ${theme.primaryFontFamily};
  background-color: ${theme.secondaryColor};

  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .section {
    padding: 3rem 1.5rem 0rem 1.5rem;
  }

  .top {
    margin-top: 5rem;
  }

  .text {
    margin-top: 3rem;
    line-height: 2;
  }

  .photos {
    margin-top: 2rem;
  }

  img {
    height: 100%;
  }
`;

const Advertisment = () => (
  <Conatiner id="advertising" className="section">
    <div className="container">
      <div className="columns  is-centered">
        <div className="column is-two-thirds has-text-centered has-text-white	">
          <h1 className="has-text-weight-medium top ">
            BRAND MESSAGING, ADVERTISING IT&apos;S YOUR CHOICE?
          </h1>
          <p className="text">
            Our audio visual video campaign is designed to engage, educate and
            influence the perception of waste and encourage accountability and
            positive motivation. These videos are supplied with each AV machine
            and can be easily customised to accommodate the buyers desired brand
            messaging or advertising needs.
          </p>
        </div>
      </div>
      <div className="columns photos">
        <div className="column is-4">
          <img src="/images/advertisment-one.jpg" alt="drink cans" />
        </div>
        <div className="column is-4">
          <img src="/images/advertisment-two.jpg" alt="plastic bottles" />
        </div>
        <div className="column is-4">
          <img src="/images/advertisment-three.jpg" alt="preserve planet" />
        </div>
      </div>
    </div>
  </Conatiner>
);

export default Advertisment;
