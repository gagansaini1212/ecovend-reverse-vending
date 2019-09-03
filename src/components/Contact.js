import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Container = styled.div`
  background-color: #e1eff2;
  font-family: 'Raleway', sans-serif;
  .columns {
    background-color: #ffffff;
  }
  .column {
    margin-top: 3rem;
    padding-bottom: 3rem;
  }

  .text {
    color: ${config.secondaryColor};
  }

  .input {
    height: 2.5rem;
    border-bottom: 1px solid ${config.secondaryColor} !important;
    background-color: #fff;
    border-color: white;
    border-radius: 0px;
    box-shadow: none;
    ::placeholder {
      color: ${config.secondaryColor};
      opacity: 1;
    }
  }

  textarea {
    border-bottom: 1px solid ${config.secondaryColor} !important;
    background-color: #fff;
    border-color: #fff;
    border-radius: 0px;
    box-shadow: none;
    ::placeholder {
      color: ${config.secondaryColor};
      opacity: 1;
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    font-weight: 400;
    background-color: ${config.secondaryColor};
    transition: opacity 0.2s;
    :hover {
      color: #fff;
      opacity: 0.6;
    }
  }

  .control {
    :hover {
      border-color: #fff;
    }
    :focus,
    :active {
      border-color: #719ece;
    }
  }
`;

const Contact = () => (
  <Container>
    <section className="section">
      <div className="container">
        <div className="columns is-8">
          <div className="column has-text-centered is-7 ">
            <h1 className="subtitle is-2 text">GET IN TOUCH</h1>
            <h4 className="subtitle is-6 text">
              ECO House, Lea Road, Waltham Abbey, Hertfordshire, EN9 1AS
            </h4>
            <h4 className="subtitle is-6 text">info@eco-vend.co.uk</h4>
            <h4 className="subtitle is-6 text">08700 777 555</h4>
          </div>
          <div className="column">
            <div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control ">
                      <input className="input" type="text" placeholder="Name" />
                    </p>
                  </div>
                  <div className="field">
                    <p className=" ">
                      <input
                        className="input "
                        type="email"
                        placeholder="Email"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control ">
                      <input
                        className="input"
                        type="text"
                        placeholder="Phone"
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className=" ">
                      <input
                        className="input "
                        type="email"
                        placeholder="Address"
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input "
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <div>
                      <textarea
                        className="textarea"
                        placeholder="Type your message here"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="button  is-large is-fullwidth">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default Contact;
