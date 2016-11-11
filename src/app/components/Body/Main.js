'use strict';

import React from 'react';

import ArticleContent from './Main/ArticleContent';

import main from './Main.css';

export default class Main extends React.Component {
  render () {
    return(
      <div className="blogMain">
        <h1>Body</h1>
        <div className="postHolder">
          {this.props.data.map(function(c,i,a) {
            return (
              <div key={"blogPost" + i} className="blogPost">
                <h4 key={"blogTitle" + i}>{a[i].title}</h4>
                <h5 key={"blogDate" + i}>{a[i].date.month}, {a[i].date.day} {a[i].date.year} </h5>
                <ArticleContent data={a[i].article}/>
                <h5 key={"blogTags" + i}>Tags: {a[i].tags.join(", ")}</h5>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
