'use strict';

import React from 'react';

import css from './TagList.css';

export default class TagList extends React.Component {
  render () {
    return (
      <ul className="tagList">
        {this.props.tagArr.map(function(tag, index){
          return <li key={index}><a href='#'>{tag}</a></li>
        })}
      </ul>
    )
  }
}
