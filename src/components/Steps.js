import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Stepscard from './StepsCard';
import IconCard from './IconCard';

const Container = styled.div`
  background-color: #f1f1f1;
  font-family: 'Raleway', sans-serif;

  .title {
    color: ${config.primaryColor};
  }

  .heading {
    padding-top: 8rem;
    font-weight: 400;
  }

  .para {
    padding: 0.5rem 0rem 5rem 0rem;
    color: ${config.primaryColor};
  }
`;

const Steps = () => (
  <Container>
    <div className="columns is-mobile is-centered is-hidden-tablet">
      <div className="column is-three-quarters">
        <div className="container">
          <div className="has-text-centered">
            <h1 className="title is-2 heading">
              REVERSE VENDING, AS SIMPLE AS 1, 2, 3
            </h1>
            <p className="para">
              Recycling used bottles and cans couldn't be easier. Here are the
              three simple steps to using any of our EcoVend Reverse Vending
              Machines
            </p>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <IconCard Link="/images/Icons/Bottle.png" />
            </div>
            <div className="column is-one-third">
              <Stepscard
                title="STEP 2"
                description="The bar code is scanned and logged."
              />
            </div>
            <div className="column is-one-third">
              <IconCard Link="/images/Icons/crusher.png" />
            </div>
            <div className="column is-one-third">
              <Stepscard
                title="STEP 1"
                description="Load empty beverage containers into the chute."
              />
            </div>
            <div className="column is-one-third">
              <IconCard Link="/images/Icons/barcode.png" width="86%" />
            </div>
            <div className="column is-one-third">
              <Stepscard
                title="STEP 3"
                description="The machine issues a reward voucher or an electronic credit."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-centered is-hidden-mobile">
      <div className="column is-three-quarters">
        <div className="container">
          <div className="has-text-centered">
            <h1 className="title is-2 heading">
              REVERSE VENDING, AS SIMPLE AS 1, 2, 3
            </h1>
            <p className="para">
              Recycling used bottles and cans couldn't be easier. Here are the
              three simple steps to using any of our EcoVend Reverse Vending
              Machines
            </p>
          </div>
          <div className="columns is-multiline is-mobile">
            <div className="column is-one-third">
              <IconCard Link="/images/Icons/Bottle.png" />
            </div>
            <div className="column is-one-third">
              <Stepscard
                title="STEP 2"
                description="The bar code is scanned and logged."
              />
            </div>
            <div className="column is-one-third">
              <IconCard Link="/images/Icons/crusher.png" />
            </div>
            <div className="column is-one-third">
              <Stepscard
                title="STEP 1"
                description="Load empty beverage containers into the chute."
              />
            </div>
            <div className="column is-one-third">
              <IconCard Link="/images/Icons/barcode.png" width="86%" />
            </div>
            <div className="column is-one-third">
              <Stepscard
                title="STEP 3"
                description="The machine issues a reward voucher or an electronic credit."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Steps;
