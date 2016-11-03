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
          <div className="blogPost blogPostOne">
            <h4>{this.props.data[0].title}</h4>
            <ArticleContent data={this.props.data[0].article}/>
          </div>
          <div className="blogPost blogPostTwo">
            <h4>{this.props.data[1].title}</h4>
            <ArticleContent data={this.props.data[1].article}/>
          </div>
          <div className="blogPost blogPostThree">
            <h4>{this.props.data[2].title}</h4>
            <ArticleContent data={this.props.data[2].article}/>
          </div>
        </div>
      </div>
    );
  }
}
