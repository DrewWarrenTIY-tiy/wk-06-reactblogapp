'use strict';

import React from 'react';

import sidebar from './Sidebar.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthArr: this.props.monthArr,
      tagArr: this.props.tagArr,
      searchStr: this.props.defaultSearchStr,
      searchType: this.props.defaultSearchType,
      searchValue: this.props.defaultSearchValue
    }
}

  onClickSelect(event) {
    this.setState({
      searchType: event.target.name,
      searchValue: event.target.id
    });
    this.props.setSearch(event.target.name, event.target.id)
  }

  render () {
    return(
      <div className="sidebar">
        <h3>Sidebar</h3>
        <div className="months">
          Months with a Post:
          <br />
          <ul className="monthList">
            {this.props.monthArr.map((month,index) => {
              return <li key={index}><a
                href="#"
                id={month}
                name="month"
                onClick={this.onClickSelect.bind(this)}> {month} </a></li> })}
          </ul>
          <br />
        </div>
        <div className="tags">
          Unique Tags:
          <br />
          <ul className="tagList">
            {this.props.tagArr.map((tag, index) => {
              return <li key={index}><a
                href="#"
                id={tag}
                name="tag"
                onClick={this.onClickSelect.bind(this)}>{tag}</a></li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}
