import React from 'react'

const FilterInput = ({newFilter, handleFilterChange}) => {
    return (
      <div>
        Results filtered by:
        <input value={newFilter} onChange={handleFilterChange}/>
      </div>
    )
  }

export default FilterInput