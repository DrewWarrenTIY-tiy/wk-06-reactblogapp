'use strict';

import React from 'react';

import Nav from './Header/Nav';

import header from './Header.css';

export default class Header extends React.Component {
  render () {
    return(
      <header>
        <img className="logo" src="./app/img/unicorn-icon.jpg" alt="logo"/>
        <Nav />
      </header>
    );
  }
}
