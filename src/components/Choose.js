import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Conatiner = styled.div`
  font-family: 'Raleway', sans-serif;
  background-color: #e90700;

  .section {
    padding: 8rem 0rem;
  }
`;

const Choose = () => (
  <Conatiner>
    <section className="section">
      <div className="container">
        <div className="columns is-centered ">
          <div className="column  is-four-fifths">
            <h1 className="title is-1 has-text-white has-text-centered">
              WHY CHOOSW REVERSE VENDING?
            </h1>
            <div className="columns">
              <div className="column  has-text-centered">
                <img src="/images/Icons/Earth.png" />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium">
                  Help save the planet for generation to come
                </h1>
              </div>
              <div className="column has-text-centered">
                <img
                  src="/images/Icons/plant.png"
                  style={{ padding: '1rem 0rem 0rem 0rem' }}
                />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  Support Corporate Social Responsibility
                </h1>
              </div>
              <div className="column has-text-centered">
                <img src="/images/Icons/Money.png" />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  Attract and Engage with Customers
                </h1>
              </div>
              <div className="column has-text-centered">
                <img
                  src="/images/Icons/Business.png"
                  style={{ padding: '1rem 0rem 0rem 0rem' }}
                />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  It's good business Sense
                </h1>
              </div>
              <div className="column has-text-centered">
                <img
                  src="/images/Icons/Sound.png"
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
