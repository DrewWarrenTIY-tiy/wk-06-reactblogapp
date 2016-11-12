"use strict";

import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import container from './App.css';


export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='content'>
          <Body />
        </div>
        <Footer />
      </div>
    );
  }
}
