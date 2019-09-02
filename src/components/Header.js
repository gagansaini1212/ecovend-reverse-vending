import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  padding-bottom: 1rem;
  .myedit {
    padding-top: 1rem;
  }
  .icon {
    color: #51be78;
    font-size: 2rem;
    margin-right: 0.75rem;
    transition: color 0.5s;
    :hover {
      color: #000000;
    }
  }
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
        <div className="container myedit">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img
                src="https://colorlib.com/preview/theme/academics/images/logo.jpg"
                width="112"
                height="28"
                alt=""
              />
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
            <div className="navbar-start">
              <a className="navbar-item" href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable ">
                <a className="navbar-link ">About us </a>
                <div className="navbar-dropdown">
                  <div>
                    <a className="navbar-item" href="#About">
                      Our Teacher
                    </a>
                    <a className="navbar-item">Our School</a>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable ">
                <a className="navbar-item">Addmissions</a>
                <a className="navbar-item" href="#Course">
                  Course
                </a>
                <a className="navbar-item" href="#Contacts">
                  Contacts
                </a>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="icon ">
                  <i className="fab fa-facebook-square" />
                </div>
                <div className="icon">
                  <i className="fab fa-twitter-square" />
                </div>
                <div className="icon">
                  <i className="fab fa-linkedin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}
