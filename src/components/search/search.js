import React, { Component } from 'react'

import './search.css';

export default class Search extends Component {

  state = {
    value: '',
  }

  onSearchChange = event => {
    const value = event.target.value;
    this.setState({
      value,
    });
    this.props.onSearchItem(value);
  };

  render() {
    const searchText = 'Type here to search';
    const { value } = this.state;

    return (

      <form className="input-group w-100 search">
        <div className="input-group-prepend">
          <span className="input-group-text cyan lighten-3" id="basic-text1">
            <i className="fa fa-search text-white"></i></span>
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          onChange={ this.onSearchChange }
          placeholder={ searchText }
          value={ value }
        />
      </form>

    );
  }
}