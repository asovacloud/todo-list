import React from 'react';

import './app-header.css';


const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex mb-4">
      <h1 className="m-0">Todo</h1>
      <ul className="app-header-info text-secondary">
        <li>{ toDo } <i class="fa fa-square"></i></li>
        <li>{ done } <i class="fa fa-check-square"></i></li>
      </ul>
    </div>
  );
};

export default AppHeader;