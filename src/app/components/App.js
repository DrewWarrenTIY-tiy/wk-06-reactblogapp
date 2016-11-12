"use strict";

import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import blogData from './blogposts.json';

import container from './App.css';

let monthArr = [];
for (let i = 0; i < blogData.length; i++) {
  if (monthArr.includes(blogData[i].date.month) != true)
  monthArr.push(blogData[i].date.month);
}

let tagArr = [];
for (let i = 0; i < blogData.length; i++) {
  for (let j = 0; j < blogData[i].tags.length; j++) {
    if (tagArr.includes(blogData[i].tags[j]) != true)
    tagArr.push(blogData[i].tags[j]);
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: blogData,
      monthArr: monthArr,
      tagArr: tagArr
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
          <Body
            clickadoodle={this.clickadoodle.bind(this)} data={this.state.data}
            monthArr={this.state.monthArr}
            tagArr={this.state.tagArr}/>
        </div>
        <Footer />
      </div>
    );
  }
}
