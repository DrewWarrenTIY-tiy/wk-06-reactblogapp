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
              <div key={"blogPost", i} className="blogPost">
                <h4 key={"blogTitle", i}>{a[i].title}</h4>
                <ArticleContent data={a[i].article}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
