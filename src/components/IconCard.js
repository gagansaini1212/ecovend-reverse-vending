import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
  :last-child {
    height: 100%;
  }
  .card {
    height: 100% !important;
  }
  img {
    width: 60%;
  }
`;

const Iconcard = props => (
  <Container>
    <div className="card">
      <div className="card-content my">
        <div className="has-text-centered">
          <img src={props.Link} alt={props.alt} />
        </div>
      </div>
    </div>
  </Container>
);

export default Iconcard;
