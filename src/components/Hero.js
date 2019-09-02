import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Hero = () => (
  <Container>
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title is-1">Econvend reverse vending</h1>
        </div>
        <div className="column">
          <img src="/images/hero.jpg" alt="" />
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;
