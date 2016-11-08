'use strict';

import React from 'react';

import css from './MonthList.css';

export default class MonthList extends React.Component {
  render () {
    let monthArr = [];
    for (let i = 0; i < this.props.data.length; i++) {
      if (monthArr.includes(this.props.data[i].date.month) != true)
      monthArr.push(this.props.data[i].date.month);
    }
    
    return (
      <ul className="monthList">
        {monthArr.map(function(month, index){
          return <li key={index}><a href='#'>{month}</a></li>
        })}
      </ul>
    )
  }
}
