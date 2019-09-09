import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import Stepscard from './StepsCard';
import IconCard from './IconCard';

const Container = styled.div`
  background-color: #f1f1f1;
  font-family: ${theme.primaryFontFamily};
  padding-bottom: 5rem;

  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .title {
    color: ${theme.primaryColor};
  }

  .heading {
    padding-top: 8rem;
    font-weight: 500;
  }

  .para {
    padding: 0.5rem 0rem 5rem 0rem;
    color: ${theme.primaryColor};
  }

  .rev {
    @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
      display: flex;
    }
  }
`;

const Steps = () => (
  <Container id="steps">
    <div className="columns is-centered ">
      <div className="column is-three-quarters">
        <div className="container">
          <div className="has-text-centered">
            <h1 className="title is-2 heading has-text-weight-bold">
              REVERSE VENDING, AS SIMPLE AS 1, 2, 3
            </h1>
            <p className="para">
              Recycling used bottles and cans couldn&apos;t be easier. Here are
              the three simple steps to using any of our EcoVend Reverse Vending
              Machines
            </p>
          </div>
        </div>
        <div className="columns   is-centered">
          <div className="column rev is-3 ">
            <IconCard Link="/images/Icons/Bottle.png" />
            <Stepscard
              title="STEP 1"
              description="Load empty beverage containers into the chute."
            />
          </div>
          <div className="column is-3">
            <Stepscard
              title="STEP 2"
              description="The bar code is scanned and logged."
            />
            <IconCard Link="/images/Icons/barcode.png" />
          </div>
          <div className="column rev is-3">
            <IconCard Link="/images/Icons/crusher.png" />
            <Stepscard
              title="STEP 3"
              description="The machine issues a reward voucher or an electronic credit."
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Steps;
