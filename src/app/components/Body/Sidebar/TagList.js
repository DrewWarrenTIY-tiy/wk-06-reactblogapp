'use strict';

import React from 'react';

import css from './TagList.css';

export default class TagList extends React.Component {
  render () {
    let tagArr = [];
    for (let i = 0; i < this.props.data.length; i++) {
      for (let j = 0; j < this.props.data[i].tags.length; j++) {
        if (tagArr.includes(this.props.data[i].tags[j]) != true)
        tagArr.push(this.props.data[i].tags[j]);
      }
    }

    console.log(tagArr);
    return (
      <ul className="tagList">
        {tagArr.map(function(tag, index){
          return <li key={index}><a href='#'>{tag}</a></li>
        })}
      </ul>
    )
  }
}
