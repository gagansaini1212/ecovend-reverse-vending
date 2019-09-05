import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import ContactForm from './ContactForm';

const Container = styled.section`
  padding: 3rem 1.5rem 0rem 1.5rem;
  background-color: #e1eff2;
  font-family: ${theme.primaryFontFamily};

  @media only screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }

  .columns {
    background-color: #ffffff;
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .column {
    margin-top: 3rem;
    padding-bottom: 3rem;
  }

  .text {
    color: ${theme.secondaryColor};
  }

  .input {
    height: 2.5rem;
    border-bottom: 1px solid ${theme.secondaryColor} !important;
    background-color: #fff;
    border-color: #fff;
    border-radius: none;
    box-shadow: none;
    ::placeholder {
      color: ${theme.secondaryColor};
      opacity: 1;
    }
  }

  textarea {
    border: 1px solid ${theme.secondaryColor} !important;
    background-color: #fff;
    border-color: #fff;
    border-radius: none;
    box-shadow: none;
    ::placeholder {
      color: ${theme.secondaryColor};
      opacity: 1;
    }
  }

  .button {
    font-size: 1rem;
    font-weight: 400;
    background-color: ${theme.secondaryColor};
    transition: opacity 0.2s;
    :hover {
      background-color: ${theme.secondaryColor};
      color: #fff;
      opacity: 0.6;
    }
  }

  .control {
    padding: 1rem;
    :hover {
      border-color: #fff;
    }
  }

  .is-7 {
    align-self: center;
  }
`;

const Contact = () => (
  <Container id="contact" className="section">
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered is-7">
          <h1 className="subtitle is-2 text">GET IN TOUCH</h1>
          <h4 className="subtitle is-6 text">
            ECO House, Lea Road, Waltham Abbey, Hertfordshire, EN9 1AS
          </h4>
          <h4 className="subtitle is-6 text">info@eco-vend.co.uk</h4>
          <h4 className="subtitle is-6 text">08700 777 555</h4>
        </div>
        <div className="column">
          <div className="field is-horizontal">
            <div className="field-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Contact;
