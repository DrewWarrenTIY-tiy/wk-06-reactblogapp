'use strict';

import React from 'react';

import css from './MonthList.css';

export default class MonthList extends React.Component {

  handleClick(e) {
    var pizza = "pizza";
    this.props.clickadoodle(pizza);
  }

  render () {
    let monthArr = [];
    for (let i = 0; i < this.props.data.length; i++) {
      if (monthArr.includes(this.props.data[i].date.month) != true)
      monthArr.push(this.props.data[i].date.month);
    }

    return (
      <ul className="monthList">
        {monthArr.map((month,index) => <li key={index}><a onClick={this.handleClick.bind(this)} href="#"> {month} </a></li> )}
      </ul>
    )
  }
}
