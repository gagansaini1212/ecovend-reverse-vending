import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;

  .title {
    color: #f26a16;
    font-size: 75px;
    font-weight: 400;
    margin-top: 9rem;
  }

  .subtitle {
    color: #f26a16;
  }
`;

const Hero = () => (
  <Container>
    <div className="container">
      <div className="columns">
        <div className="column ">
          <h1 className="title is-1 is-capitalized ">
            ECONVEND REVERS VENDING
          </h1>
          <h5 className="subtitle is-5">
            Welcome to the next generation of recycling
          </h5>
        </div>
        <div className="column has-text-right">
          <img className="has-text-right" src="/images/hero.jpg" alt="" />
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;
