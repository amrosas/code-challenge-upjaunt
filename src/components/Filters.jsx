import React from 'react';

const Filters = ({filters, setFilters, getFilteredRestaurants, clearFilters, placeRef, tipsRef, latitudeRef, longitudeRef}) => {

  return (
    <div> Filters:
      <input type='text' ref={placeRef} id='place' placeholder='Place' onChange={setFilters} value={filters.place}/>
      <input type='text' ref={tipsRef} id='tips' placeholder='Tips' onChange={setFilters} value={filters.tips}/>
      <input type='text' ref={latitudeRef} id='latitude' placeholder='Latitude' onChange={setCoordinateFilters} value={filters.latitude}/>
      <input type='text' ref={longitudeRef} id='longitude' placeholder='Longitude' onChange={setCoordinateFilters} value={filters.longitude}/>
      <button type='button' onClick={getFilteredRestaurants}>Search</button>
      <button type='button' onClick={clearFilters}>Clear Filters</button>
    </div>
  );
};

export default Filters