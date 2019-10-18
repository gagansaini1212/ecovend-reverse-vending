import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../utils/theme';

const Navbar = styled.div`
  font-family: ${theme.primaryFontFamily};
  padding-bottom: 1rem;
  .navbar-item img {
    max-height: none;
  }

  .is-active {
    color: #e1e8e9 !important;
    @media only screen and (max-width: 768px) {
      color: black !important;
    }
  }

  .navbar-item {
    transition: color 0.2s;
    :hover {
      background: transparent;
      color: #e1e8e9;
    }
    :focus-within {
      background: transparent;
      color: ${theme.primaryColor};
    }
  }
  .navbar-end {
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
  .navbar-dropdown {
    margin-top: -2rem;
    @media only screen and (max-width: 768px) {
      margin-top: unset;
    }
  }
`;

const LinkStyled = styled(Link)`
  color: ${theme.primaryColor};
  font-size: ${theme.fontSize};
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
              <LinkStyled to="/" className="navbar-item">
                Home
              </LinkStyled>
              <LinkStyled href="#advertising" className="navbar-item ">
                Advertising
              </LinkStyled>
              <LinkStyled href="/" className="navbar-item">
                Our Range
              </LinkStyled>
              <LinkStyled href="#drs" className="navbar-item">
                News
              </LinkStyled>
              <LinkStyled href="#steps" className="navbar-item">
                Case Studies
              </LinkStyled>
              <LinkStyled href="#choose" className="navbar-item">
                FAQ
              </LinkStyled>
              <LinkStyled to="/contact" className="navbar-item ">
                Contact
              </LinkStyled>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}
