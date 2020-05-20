import React from 'react';
import ItemFilterStatus from '../item-filter-status';
import Search from '../search';

import './filter-panel.css';

const FilterPanel = props => {

  const { onSearchItem, onClickFilter, filter } = props;

  return (
    <div className="search-panel mb-2 d-flex">
      
      <Search onSearchItem={ onSearchItem  } />
      <ItemFilterStatus
        onClickFilter={ onClickFilter }
        filter={ filter }
      />

    </div>

  );
};

export default FilterPanel;