import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #e1eff2;
  .columns {
    background-color: #ffffff;
  }
  .column {
    margin-top: 5rem;
  }
`;

const Contact = () => (
  <Container id="contact" className="section">
    <div className="container">
      <div className="columns">
        <div className="column">First column</div>
        <div className="column">
          <div className="">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
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
                  <p className="control is-expanded has-icons-left">
                    <input className="input" type="text" placeholder="Phone" />
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
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Type your message here"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="button is-primary is-fullwidth">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Contact;
