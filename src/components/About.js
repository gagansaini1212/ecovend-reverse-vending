import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Container = styled.div`
  margin-top: 1rem;
  font-family: 'Raleway', sans-serif;
  background-color: #aabcbf;
  @media only screen and (max-width: 768px) {
    margin-top: 0rem;
  }
  .subtitle {
    margin: 3rem;
    font-weight: 500;
  }
  .text {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1.1px;
    line-height: 2;
    padding: 0rem 10rem;
  }
  .button {
    margin-top: 4rem;
    background: transparent;
    border: none;
  }
`;

const LinkStyled = styled(AnchorLink)`
  font-size: 14px;
`;

const About = () => (
  <Container id="about" className="container">
    <section className="section">
      <div className="has-text-centered">
        <h2 className="subtitle is-6 has-text-white">
          WHAT IS A REVERSE VENDING MACHINE?
        </h2>
        <div className="columns is-mobile is-centered">
          <div className="column">
            <p className="has-text-white text">
              A reverse vending machine or RVM is a recycling device with
              integrated technology that accepts used (empty) beverage
              containers in return for a monetary or non monetary reward – these
              can be for example vouchers, discounts or even charitable
              donations.{' '}
            </p>
            <p className="has-text-white text">
              These machines provide an automated function that collects, sorts,
              compacts and stores bottles and cans. RVMs provide a simple and
              effLinkctive solution to beverage container waste.
            </p>
            <LinkStyled href="#contact" className="button has-text-white">
              Contact
            </LinkStyled>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default About;