import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  margin-top: 6rem;
  font-family: 'Raleway', sans-serif;
  background-color: #aabcbf;

  .subtitle {
    margin-bottom: 3rem;
  }

  .button {
    margin-top: 7rem;
    background: transparent;
    border: none;
  }
`;

const AboutMachine = () => (
  <Container className="container">
    <section className="section">
      <div className="has-text-centered">
        <h5 className="subtitle is-5 has-text-white">
          WHAT IS A REVERSE VENDING MACHINE?
        </h5>
        <div className="columns is-mobile is-centered">
          <div className="column is-three-quarters">
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

export default AboutMachine;
