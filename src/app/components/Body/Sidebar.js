'use strict';

import React from 'react';

import MonthList from './Sidebar/MonthList';
import TagList from './Sidebar/TagList';

import sidebar from './Sidebar.css';

export default class Sidebar extends React.Component {
  render () {
    return(
      <div className="sidebar">
        <h3>Sidebar</h3>
        <div className="months">
          Months with a Post:
          <br />
          <MonthList clickadoodle={this.props.clickadoodle} data={this.props.data} />
          <br />
        </div>
        <div className="tags">
          Unique Tags:
          <br />
          <TagList data={this.props.data} />
          <br />
        </div>
      </div>
    );
  }
}
