import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
  .card {
    padding: 1rem 0rem 6.5rem 0rem;
  }

  .card-para {
    font-weight: 400;
    color: ${config.primaryColor};
  }
`;

const StepsCard = ({ title, description, padding }) => (
  <Container padding={padding}>
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
