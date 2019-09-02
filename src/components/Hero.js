import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Hero = () => (
  <Container>
    <div className="container">
      <div className="columns">
        <div className="column">
          <section className="section">
            <div className="container">
              <h1 className="title is-1 is-capitalized">Econvend</h1>
              <h1 className="title is-1 is-capitalized">reverse</h1>
              <h1 className="title is-1 is-capitalized">vending</h1>
            </div>
          </section>
        </div>
        <div className="column">
          <img src="/images/hero.jpg" alt="" />
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;
