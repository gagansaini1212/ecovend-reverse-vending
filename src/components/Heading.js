import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';

const HeadingStyled = styled.div`
  margin-top: 2rem;
  .tabs ul {
    padding-bottom: 2rem;
    border-bottom: 1.25px solid ${config.primaryColor};
  }
  .tabs a {
    border-bottom: 0px;
    font-size: 14px;
    color: ${config.primaryColor};
  }
`;

const Heading = () => (
  <HeadingStyled>
    <div className="container">
      <div clatabs>
        <ul>
          <li>tabs
            <a href="mailto:">info@eco-vend.co.uk</a>
          </li>
          <li>
            <a href="tel:">08700 777 555</a>
          </li>
        </ul>
      </div>
    </div>
  </HeadingStyled>
);

export default Heading;
