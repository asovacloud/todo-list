import React from 'react';
import TodoListItem from '../todo-list-item'

import './todo-list.css';

const TodoList = ({
  onDeleted,
  onToggleDone,
  onToggleImportant,
  todos,
}) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return <li
        key={ item.id }
        className="list-group-item p-0"
      >
      <TodoListItem
        { ...itemProps }
        onDeleted={ () => onDeleted(id) }
        onToggleDone={ () => onToggleDone(id) }
        onToggleImportant={ () => onToggleImportant(id) }
      />
    </li>;
  });

  return (
    <ul className="list-group todo-list mb-2">
      { elements }
    </ul>
  );
};

export default TodoList;