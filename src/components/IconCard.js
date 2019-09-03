import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;

  .card-para {
    font-weight: 100;
    color: ${config.primaryColor};
  }
`;

const Iconcard = props => (
  <Container>
    <div className="card">
      <div className="card-content my">
        <div className="has-text-centered">
          <img src={props.Link} alt="" width={props.width} />
        </div>
      </div>
    </div>
  </Container>
);

export default Iconcard;
