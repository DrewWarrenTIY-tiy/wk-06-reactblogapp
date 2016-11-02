'use strict';

import React from 'react';

import main from './Main.css';

import blogData from '../blogposts.json';

export default class Main extends React.Component {
  render () {
    return(
      <div className="blogMain">
        <h1>Body</h1>
        <div className="postHolder">
          <div className="blogPost blogPostOne">
            <h4>{blogData[0].title}</h4>
            <p>{blogData[0].article}</p>
          </div>
          <div className="blogPost blogPostTwo">
            <h4>{blogData[1].title}</h4>
            <p>{blogData[1].article}</p>
          </div>
          <div className="blogPost blogPostThree">
            <h4>{blogData[2].title}</h4>
            <p>{blogData[2].article}</p>
          </div>
        </div>
      </div>
    );
  }
}
