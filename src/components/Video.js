import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';

const Conatiner = styled.div`
  margin-top: 6rem;
  font-family: 'Raleway', sans-serif;
  padding-bottom: 1rem;
  .title {
    color: ${config.primaryColor};
    font-weight: 500;
  }
  .video {
    width: 80%;
    height: 34rem;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
  }
`;

const Video = () => (
  <Conatiner id="video" className="container">
    <div className="has-text-centered">
      <h1 className="title is-1">WELCOME TO REVERSE VENDING</h1>
      <iframe
        width="560"
        height="415"
        className="video"
        src="https://www.youtube.com/embed/iGYE3JMVva8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </Conatiner>
);

export default Video;
