import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
  .card {
    padding: 1rem 0rem 6.5rem 0rem;
  }

  .card-para {
    font-weight: 100;
    color: ${config.primaryColor};
  }
`;

const StepsCard = props => (
  <Container>
    <div className="card">
      <div className="card-content my">
        <div className="has-text-centered">
          <h3 className="subtitle is-5 card-para">{props.title}</h3>
          <h4 className="subtitle is-5  card-para">{props.description}</h4>
        </div>
      </div>
    </div>
  </Container>
);

export default StepsCard;
