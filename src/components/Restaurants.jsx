import React from 'react';

const Restaurants = ({restaurantList}) => {
  const list = restaurantList.map(restaurant => (
    <li>{restaurant.Place}</li>
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