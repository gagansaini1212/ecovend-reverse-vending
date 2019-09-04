import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
  }
`;

const LinkStyled = styled(AnchorLink)`
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
              <LinkStyled href="/" className="navbar-item is-active">
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
              <LinkStyled href="#steps" className="navbar-item">
                User Steps
              </LinkStyled>
              <LinkStyled href="#choose" className="navbar-item">
                Why Choose RVMs
              </LinkStyled>
              <LinkStyled href="#customer-engagement" className="navbar-item">
                Customer Engagement
              </LinkStyled>
              <div className="navbar-item has-dropdown is-hoverable ">
                <LinkStyled className="navbar-item ">More</LinkStyled>
                <div className="navbar-dropdown">
                  <LinkStyled href="#advertising" className="navbar-item ">
                    Advertising
                  </LinkStyled>
                  <LinkStyled href="#contact" className="navbar-item ">
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
