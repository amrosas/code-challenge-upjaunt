import React from 'react';

const Filters = ({filters, setFilters, getFilteredRestaurants, clearFilters}) => {

  return (
    <div> Filters:
      <input type='text' id='Place' placeholder='Place' onChange={setFilters} value={filters.Place}/>
      <input type='text' id='Tips' placeholder='Tips' onChange={setFilters} value={filters.Tips}/>
      <input type='text' id='Latitude' placeholder='Latitude' onChange={setFilters} value={filters.Latitude}/>
      <input type='text' id='Longitude' placeholder='Longitude' onChange={setFilters} value={filters.Longitude}/>
      <button type='button' onClick={getFilteredRestaurants}>Search</button>
      <button type='button' onClick={clearFilters}>Clear Filters</button>
    </div>
  );
};

export default Filters