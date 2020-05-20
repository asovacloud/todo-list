import React, { Component } from 'react'

import './add-panel.css';

export default class AddPanel extends Component {

  state = {
    value: '',
  }

  onValueChange = event => {
    this.setState({
      value: event.target.value 
    });
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form
        className="add-panel d-flex"
        onSubmit={ this.onSubmit }
      >
        <div className="w-100">
          <input
            type="text"
            className="form-control"
            onChange={ this.onValueChange }
            placeholder="Add Item"
            value={ value }
          />
        </div>
        <button className="btn btn-outline-success ml-2">
          <i className="fa fa-plus"></i>
        </button>
      </form>
    );
  }

}

