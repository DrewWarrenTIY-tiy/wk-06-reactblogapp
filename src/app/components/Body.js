'use strict';

import React from 'react';

import Main from './Body/Main';
import Sidebar from './Body/Sidebar';

import body from './Body.css';

import blogData from './blogposts.json';

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

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      data: blogData,
      monthArr: monthArr,
      tagArr: tagArr,
      searchStr: '',
      searchType: '',
      searchValue: ''
    }
  };

  setBlogData(stype, sval) {
    let arr = [];
    if (stype === "month") {
      blogData.map(function(obj) {
        if (obj.date.month === sval) {
          arr.push(obj);
        }
      })
    } else if (stype === "tag") {
      blogData.map(function(obj) {
        if (obj.tags.includes(sval)) {
          arr.push(obj);
        }
      })
    }
    return arr;
  }

  onSetSearch (stype, sval) {
    this.setState({
      searchType: stype,
      searchValue: sval,
      data: this.setBlogData(stype, sval)
    });
  }

  onSetSearchStr (str) {
    console.log("str: ", str);
    this.setState({
      searchStr: str
    });
}

  render () {
    return(
      <main className='body'>
      <Main
        data={this.state.data}
        searchStr={this.state.searchStr}
        searchType={this.state.searchType}
        searchValue={this.state.searchValue} />
      <Sidebar
        data={this.state.data}
        monthArr={this.state.monthArr}
        tagArr={this.state.tagArr}
        setSearchStr={this.onSetSearchStr.bind(this)}
        defaultSearchStr={this.state.searchStr}
        defaultSearchType={this.state.searchType}
        defaultSearchValue={this.state.searchValue}
        setSearch={this.onSetSearch.bind(this)}/>
      </main>
    );
  }
}
