'use strict';

import React from 'react';

export default class ArticleContent extends React.Component {
  render () {
    return (
      <div>
        {this.props.data.map(function(paragraph, index){
          return <p key={index}>{paragraph}</p>
        })}
      </div>
    );
  }
}
