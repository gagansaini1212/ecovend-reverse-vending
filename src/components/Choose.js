import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.div`
  font-family: ${theme.primaryFontFamily};
  background-color: #e90700;

  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .section {
    padding: 8rem 0rem;
  }
`;

const Choose = () => (
  <Conatiner id="choose">
    <section className="section">
      <div className="container">
        <div className="columns is-centered ">
          <div className="column  is-four-fifths">
            <h1 className="title is-1 has-text-white has-text-centered">
              WHY CHOOSE REVERSE VENDING?
            </h1>
            <div className="columns">
              <div className="column  has-text-centered">
                <img src="/images/Icons/earth.png" alt="Save Earth" />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium">
                  Help save the planet for generation to come
                </h1>
              </div>
              <div className="column has-text-centered">
                <img
                  src="/images/Icons/plant.png"
                  alt="Support Us"
                  style={{ padding: '1rem 0rem 0rem 0rem' }}
                />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  Support Corporate Social Responsibility
                </h1>
              </div>
              <div className="column has-text-centered">
                <img src="/images/Icons/money.png" alt="Attract Customer" />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  Attract and Engage with Customers
                </h1>
              </div>
              <div className="column has-text-centered">
                <img
                  src="/images/Icons/business.png"
                  alt="Business Sense"
                  style={{ padding: '1rem 0rem 0rem 0rem' }}
                />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  It&apos;s good business Sense
                </h1>
              </div>
              <div className="column has-text-centered">
                <img
                  src="/images/Icons/sound.png"
                  alt="Revenue"
                  style={{ padding: '1rem 0rem 0rem 0rem' }}
                />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  Enjoy an additional revenue stream
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Conatiner>
);

export default Choose;
