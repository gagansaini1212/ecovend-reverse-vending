import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.div`
  font-family: ${theme.primaryFontFamily};
  padding-bottom: 10rem;
  .text {
    color: ${theme.primaryColor};
    margin-top: 10rem;
    font-weight: 500;
    font-size: ${theme.fontSizeMedium};
  }
  .para {
    color: ${theme.primaryColor};
    line-height: 1.75rem;
    font-size: ${theme.fontSize};
    margin-top: 5rem;
  }
`;

const DrsInfo = () => (
  <Conatiner id="drs" className="container">
    <div className="has-text-centered">
      <div className="columns is-mobile is-centered">
        <div className="column is-two-thirds">
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
