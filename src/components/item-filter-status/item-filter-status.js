import React, { Component } from 'react'

import './item-filter-status.css';

export default class ItemFilterStatus extends Component {

  render() {

    const buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' },
    ];


    const {
      filter,
      onClickFilter,
    } = this.props;

    return (
      <ul className="btn-group m-0 pl-2">
        {
          buttons.map(item => {
            const clazz = (item.name === filter) ? 'active' : '';
            return (
              <button
                className={ `btn btn-outline-info ${clazz}` }
                key={ item.label }
                onClick={ () => onClickFilter(item.name) }
              >{ item.label }</button>
            ); 
          })
        }
      </ul>
    );
  }
}
