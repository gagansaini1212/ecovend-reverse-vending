import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  margin-top: 6rem;
  font-family: 'Raleway', sans-serif;
  background-color: #aabcbf;
  @media only screen and (max-width: 768px) {
    margin-top: 0rem;
  }
  .subtitle {
    margin-bottom: 3rem;
  }
  .button {
    margin-top: 7rem;
    background: transparent;
    border: none;
  }
`;

const About = () => (
  <Container id="about" className="container">
    <section className="section">
      <div className="has-text-centered">
        <h2 className="subtitle is-5 has-text-white">
          WHAT IS A REVERSE VENDING MACHINE?
        </h2>
        <div className="columns is-mobile is-centered">
          <div className="column is-10">
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
              effective solution to beverage container waste.
            </p>
            <Link to="#" className="button has-text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default About;
