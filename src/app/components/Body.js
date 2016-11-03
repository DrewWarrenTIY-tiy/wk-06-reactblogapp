'use strict';

import React from 'react';

import Main from './Body/Main';
import Sidebar from './Body/Sidebar';

import body from './Body.css';

export default class Body extends React.Component {
  render () {
    return(
      <main className='body'>
      <Main data={this.props.data} />
      <Sidebar />
      </main>
    );
  }
}
