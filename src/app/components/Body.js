'use strict';

import React from 'react';

import Main from './Body/Main';
import Sidebar from './Body/Sidebar';

export default class Body extends React.Component {
  render () {
    return(
      <main className='body'>
      <h1>Body</h1>
      <Main />
      <Sidebar />
      </main>
    );
  }
}
