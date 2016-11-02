'use strict';

import React from 'react';

export default class Main extends React.Component {
  render () {
    return(
      <div className="blogMain">
        <h1>Body</h1>
        <div className="blogPost blogPostOne">
          Blog Post One
        </div>
        <div className="blogPost blogPostTwo">
          Blog Post Two
        </div>
        <div className="blogPost blogPostThree">
          Blog Post Three
        </div>
      </div>
    );
  }
}
