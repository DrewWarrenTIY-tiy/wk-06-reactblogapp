'use strict';

import React from 'react';

import sidebar from './Sidebar.css';

export default class Sidebar extends React.Component {
  render () {
    return(
      <div className="sidebar">
        <h3>Sidebar</h3>
        <div className="months">
          Months with a Post:
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
