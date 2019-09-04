import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';

const Conatiner = styled.div`
  font-family: 'Raleway', sans-serif;
  padding-bottom: 10rem;
  .text {
    color: ${config.primaryColor};
    margin-top: 10rem;
    font-weight: 500;
    font-size: 1.1rem;
  }
  .para {
    color: ${config.primaryColor};
    line-height: 1.75rem;
    padding: 0.3rem 3.65rem;
    font-size: 14px;
    margin-top: 5rem;
  }
`;

const DrsInfo = () => (
  <Conatiner id="drs" className="container">
    <div className="has-text-centered">
      <div className="columns is-mobile is-centered">
        <div className="column is-three-quarters">
          <h4 className="subtitle is-4 text">
            HOW ARE REVERSE VENDING MACHINES BEING USED?
          </h4>
          <p className="para">
            RVMs have gained significant popularity in the last five years with
            impressive levels of user engagement across Europe, Asia and the
            Americas leading to up to 97% beverage container recycling waste in
            some countries. Reverse Vending is particularly popular in places
            that have mandatory recycling laws or container deposit legislation.
            The UK government has recently announced plans for a national
            deposit return scheme which will begin in 2021 starting in Scotland.
          </p>
        </div>
      </div>
    </div>
  </Conatiner>
);

export default DrsInfo;