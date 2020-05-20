import React, { Component } from 'react'
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import FilterPanel from '../filter-panel';
import AddPanel from '../add-panel';

import './app.css';

export default class App extends Component {

  getTodoData = () => {
    const data = localStorage.getItem('todoData');
    return (data) ? JSON.parse(data) : [];
  }

  state = {
    todoData: this.getTodoData(),
    searchValue: '',
    filter: 'all',
  }

  createTodoItem(label) {
    const maxId = `f${(~~(Math.random()*1e8)).toString(16)}`;
    return {
      label,
      important: false,
      done: false,
      id: maxId,
    }
  }

  onDeleted = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      window.localStorage.setItem('todoData', JSON.stringify(newArray));

      return {
        todoData: newArray,
      };
    })
  }

  addItem = text => {
    const createRow = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, createRow];
      window.localStorage.setItem('todoData', JSON.stringify(newArray));
      return { todoData: newArray }
    });
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem,
      [propName]: !oldItem[propName]}
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const newArray = this.toggleProperty(todoData, id, 'important');
      window.localStorage.setItem('todoData', JSON.stringify(newArray));
      return { todoData: newArray, }
    })
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const newArray = this.toggleProperty(todoData, id, 'done');
      window.localStorage.setItem('todoData', JSON.stringify(newArray));
      return { todoData: newArray }
    });
  }

  onSearchItem = value => {
    this.setState({ searchValue: value, });
  };

  search(items, value) {
    value = value.toLowerCase();
    if (value.length === '') return items;

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(value) > -1;
    });
  }

  filter(items, filter) {

    switch(filter) {
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item => item.done);
      default:
        return items;
    };

  }

  onClickFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const {
      todoData,
      searchValue,
      filter,
    } = this.state;

    const doneCount = todoData.filter(el => el.done).length;
    const toDoCount = todoData.length - doneCount;
    const visibleItems = this.filter(
      this.search(todoData, searchValue), filter
    );

    return (
      <div className="app">
        <AppHeader
          toDo={ toDoCount }
          done={ doneCount }
        />
        <FilterPanel
          onSearchItem={ this.onSearchItem }
          onClickFilter={ this.onClickFilter }
          filter={ filter }
        />
        <TodoList
          todos={ visibleItems }
          onDeleted={ this.onDeleted }
          onToggleDone={ this.onToggleDone }
          onToggleImportant={ this.onToggleImportant }
        />
        <AddPanel addItem={ this.addItem } />
      </div>
    );
  }
};