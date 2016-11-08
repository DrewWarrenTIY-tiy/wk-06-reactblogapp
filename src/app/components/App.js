"use strict";

import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import blogData from './blogposts.json';

import container from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: blogData
    }
  };

  clickadoodle(pizza) {
    console.log(pizza);
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <div className='content'>
          <Body clickadoodle={this.clickadoodle.bind(this)} data={this.state.data}/>
        </div>
        <Footer />
      </div>
    );
  }
}
