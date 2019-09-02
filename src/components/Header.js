import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Navbar = styled.div`
  padding-bottom: 1rem;
  .navbar-item img {
    max-height:none;
  }

  .navbar-item{
    transition: color 0.2s;
    :hover {
      background: transparent;
      color: #E1E8E9;
    }

  }
  }
`;

const LinkStyled = styled(Link)`
  color: ${config.primaryColor};
  font-size: 14px;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      View: false,
    };
  }

  Menu() {
    const { View } = this.state;
    this.setState({
      View: !View,
    });
  }

  render() {
    const { View } = this.state;
    return (
      <Navbar className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/images/logo.png" alt="" />
            </a>
            <a
              role="button"
              className={View ? 'navbar-burger is-active' : 'navbar-burger '}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => this.Menu()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className={View ? 'navbar-menu is-active' : 'navbar-menu '}
          >
            <div className="navbar-end">
              <LinkStyled to="#" className="navbar-item is-active">
                Home
              </LinkStyled>
              <LinkStyled to="#" className="navbar-item">
                About RVM
              </LinkStyled>
              <LinkStyled to="#" className="navbar-item">
                Video
              </LinkStyled>

              <LinkStyled to="#" className="navbar-item">
                DRS
              </LinkStyled>
              <LinkStyled to="#" className="navbar-item">
                User Steps
              </LinkStyled>
              <LinkStyled to="#" className="navbar-item">
                Why Choose RVMs
              </LinkStyled>
              <LinkStyled to="#" className="navbar-item">
                Customer Engagement
              </LinkStyled>
              <LinkStyled to="#" className="navbar-item">
                More
              </LinkStyled>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}
