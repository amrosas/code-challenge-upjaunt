import React from 'react';

const Restaurants = restaurantList => {
  const list = restaurantList.map(restaurant => (
    <li>{restaurant.name}</li>
  ))
  return (
    <div>
      Restaurants:
      <ul>
        {list}
      </ul>
    </div>
  );
};

export default Restaurants