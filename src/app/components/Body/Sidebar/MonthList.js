'use strict';

import React from 'react';

import css from './MonthList.css';

export default class MonthList extends React.Component {

  handleClick(e) {
    var pizza = "pizza";
    this.props.clickadoodle(pizza);
  }

  render () {
    return (
      <ul className="monthList">
        {this.props.monthArr.map((month,index) => <li key={index}><a onClick={this.handleClick.bind(this)} href="#"> {month} </a></li> )}
      </ul>
    )
  }
}
