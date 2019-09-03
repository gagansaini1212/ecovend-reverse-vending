import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
  padding-bottom: 4rem;

  .card {
    padding: ${props => props.padding};
  }

  .card-para {
    font-weight: 100;
    color: ${config.primaryColor};
  }
`;

const StepsCard = ({ title, description, padding }) => (
  <Container padding={padding}>
    <div className="card">
      <div className="card-content my">
        <div className="has-text-centered">
          <h3 className="subtitle is-5 card-para">{title}</h3>
          <h4 className="subtitle is-5  card-para">{description}</h4>
        </div>
      </div>
    </div>
  </Container>
);

export default StepsCard;
