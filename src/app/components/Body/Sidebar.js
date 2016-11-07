'use strict';

import React from 'react';

import MonthList from './Sidebar/MonthList'

import sidebar from './Sidebar.css';

export default class Sidebar extends React.Component {
  render () {
    return(
      <div className="sidebar">
        <h3>Sidebar</h3>
        <div className="months">
          Months with a Post:
          <br />
          <MonthList data={this.props.data} />
          <br />
        </div>
      </div>
    );
  }
}
