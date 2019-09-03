import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Container = styled.div`
  background-color: #e1eff2;
  .columns {
    background-color: #ffffff;
  }
  .column {
    margin-top: 3rem;
    padding-bottom:3rem;
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

      :hover{
        border-color: red;
      }
      :focus{
        
          outline: none !important;
      }
    }

  }
    button{
      font-size: 1rem;
      color:#fff;
      font-weight:400;
      background-color:${config.secondaryColor};
      transition: opacity 0.2s;
      :hover{
        color:#fff;
        opacity:0.6;
      }
    }

    .control{
      :hover{
        border-color: #fff;
      }
      :focus,:active{
            border-color: #719ECE;
      }
    }
`;

const Contact = () => (
  <Container>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">First column</div>
          <div className="column">
            <div className="">
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
