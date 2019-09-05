import React from 'react';
import styled from 'styled-components';

import { withPropsOnChange } from 'recompose';
import theme from '../utils/theme';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
  padding: ${props => props.card};
  @media only screen and (max-width: 768px) {
    padding: 1rem;
    margin-top: none;
  }

  .card {
    padding: ${props => props.padding};
    @media only screen and (max-width: 768px) {
      padding: 0rem;
    }
  }

  .card-para {
    font-weight: 400;
    color: ${theme.primaryColor};
  }
`;

const StepsCard = ({ title, description, padding, card }) => (
  <Container padding={padding} card={card}>
    <div className="card">
      <div className="card-content">
        <div className="has-text-centered">
          <h3 className="subtitle is-5 card-para">{title}</h3>
          <h4 className="subtitle is-5  card-para">{description}</h4>
        </div>
      </div>
    </div>
  </Container>
);

export default StepsCard;
