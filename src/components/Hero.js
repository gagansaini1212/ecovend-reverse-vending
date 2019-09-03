import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  font-family: 'Raleway', sans-serif;
  .title {
    color: #f26a16;
    font-size: 72px;
    font-weight: 400;
    margin-top: 8rem;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
      font-size: 50px;
    }
  }
  .subtitle {
    color: #f26a16;
    font-size: 1.3rem;
  }
`;

const Hero = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-5 has-text-centered">
          <h1 className="title is-1 is-capitalized">ECOVEND REVERSE VENDING</h1>
          <h5 className="subtitle">
            Welcome to the next generation of recycling
          </h5>
        </div>
        <div className="column has-text-right is-hidden-mobile">
          <img
            className="has-text-right"
            src="/images/hero.jpg"
            alt="vending machine"
          />
        </div>
        <div className="column has-text-centered is-hidden-tablet">
          <img
            className="has-text-centered"
            src="/images/hero.jpg"
            alt="vending machine"
          />
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;
