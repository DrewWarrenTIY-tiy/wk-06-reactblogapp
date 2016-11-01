"use strict";

import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
