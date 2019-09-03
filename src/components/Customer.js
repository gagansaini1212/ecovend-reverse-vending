import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Conatiner = styled.div`
  font-family: 'Raleway', sans-serif;
  background-color: #e1eff2;

  .background {
    background: url('/images/Customer.jpg');
    background-repeat: no-repeat;
    background-size: auto;
  }

  .Heading {
    margin-top: 6rem;
    margin-bottom: 4rem;
    font-weight: 500;
    color: ${config.secondaryColor};
  }

  .text {
    margin-top: 2rem;
    color: ${config.secondaryColor};
    font-weight: 200;
    line-height: 1.5;
  }

  .text-two {
    margin-top: 2rem;
    color: ${config.secondaryColor};
    font-weight: 200;
    padding-bottom: 10rem;
  }
`;

const Customer = () => (
  <Conatiner>
    <div className="columns">
      <div className="column  ">
        <div className="columns is-centered ">
          <div className="column is-four-fifths first-column">
            <h1 className="Heading">ENGAGING WITH THE CUSTOMER</h1>
            <p className="text">
              Whilst Reverse vending has an impressive proven track record with
              customer take up lets explore why this modern means of recycling
              is making the world think greener.
            </p>
            <p className="text-two">
              With conveniently located RV machines it’s a quick and easy way to
              recycle ‘on the go’.
            </p>
          </div>
        </div>
      </div>
      <div className="column " />
    </div>
  </Conatiner>
);

export default Customer;
