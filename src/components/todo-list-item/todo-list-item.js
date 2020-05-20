import React, { Component } from 'react'

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {

    const {
      done,
      important,
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
    } = this.props;

    let classNames = 'todo-list-item p-1 pl-3 d-flex align-items-center';
    let classNamesBtnImportant = 'btn btn-sm btn-outline-success';
    if (done) classNames += ' done';
    if (important) {
      classNames += ' important';
      classNamesBtnImportant += ' active';
    };

    return (
      <div className={ classNames }>
        <span
          onClick={ onToggleDone }
          className="todo-list-item-label"
        >{ label }</span>
        <div className="ml-auto todo-list-item-buttons">
          <button
            className="btn btn-sm btn-outline-danger mr-1"
            onClick={ onDeleted }
          ><i className="fa fa-trash"></i></button>
          <button
            className={ classNamesBtnImportant }
            onClick={ onToggleImportant }
            ><i className="fa fa-exclamation"></i></button>
        </div>
      </div>
    );
  }
}
