import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import config from '../utils/config';

const Navbar = styled.div`
  font-family: 'Raleway', sans-serif;
  padding-bottom: 1rem;
  .navbar-item img {
    max-height: none;
  }
  .navbar-item {
    transition: color 0.2s;
    :hover {
      background: transparent;
      color: #e1e8e9;
    }
  }
  .navbar-end {
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;

const LinkStyled = styled(AnchorLink)`
  color: ${config.primaryColor};
  font-size: 13px;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: false,
    };
  }

  Menu = () => {
    const { view } = this.state;
    this.setState({
      view: !view,
    });
  };

  render() {
    const { view } = this.state;
    return (
      <Navbar className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <img src="/images/logo.png" alt="ecovend-logo" />
            </a>
            <a
              className={view ? 'navbar-burger is-active' : 'navbar-burger '}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => this.Menu()}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className={view ? 'navbar-menu is-active' : 'navbar-menu '}>
            <div className="navbar-end">
              <LinkStyled href="#" className="navbar-item is-active">
                Home
              </LinkStyled>
              <LinkStyled href="#about" className="navbar-item">
                About RVM
              </LinkStyled>
              <LinkStyled href="#video" className="navbar-item">
                Video
              </LinkStyled>
              <LinkStyled href="#drs" className="navbar-item">
                DRS
              </LinkStyled>
              <LinkStyled href="#" className="navbar-item">
                User Steps
              </LinkStyled>
              <LinkStyled href="#" className="navbar-item">
                Why Choose RVMs
              </LinkStyled>
              <LinkStyled href="#" className="navbar-item">
                Customer Engagement
              </LinkStyled>
              <div className="navbar-item has-dropdown is-hoverable ">
                <LinkStyled href="#" className="navbar-item ">
                  More
                </LinkStyled>
                <div className="navbar-dropdown">
                  <LinkStyled href="#" className="navbar-item ">
                    Advertising
                  </LinkStyled>
                  <LinkStyled href="#" className="navbar-item ">
                    Contact
                  </LinkStyled>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}
