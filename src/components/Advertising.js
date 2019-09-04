import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Conatiner = styled.div`
  margin-top: 0.79rem;
  font-family: 'Raleway', sans-serif;
  background-color: ${config.secondaryColor};

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
`;

const Advertisment = () => (
  <Conatiner>
    <section className="section">
      <div className="columns  is-centered">
        <div className="column is-two-thirds has-text-centered has-text-white	">
          <h1 className="has-text-weight-medium top ">
            BRAND MESSAGING, ADVERTISING IT'S YOUR CHOICE?
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
      <div className="columns   photos">
        <div className="column ">
          <img src="/images/Advertisment-one.jpg" />
        </div>
        <div className="column">
          <img
            src="/images/Advertisment-two.jpg"
            style={{ height: '33.80rem' }}
          />
        </div>
        <div className="column">
          <img src="/images/Advertisment-three.jpg" />
        </div>
      </div>
    </section>
  </Conatiner>
);

export default Advertisment;
