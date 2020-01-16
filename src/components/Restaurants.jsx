import React from 'react';

const Restaurants = ({restaurantList}) => {
  const list = restaurantList ? restaurantList.map(restaurant => (
    <tr key={restaurant.Place}>
      <td>{restaurant.Place}</td>
      <td>{restaurant.Latitude}</td>
      <td>{restaurant.Longitude}</td>
      <td>{restaurant.Tips}</td>
      <td>{restaurant.count}</td>
    </tr>
  )) : <tr></tr>
  return (
    <div>
      Restaurants:
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Tips</th>
            <th># of Searchs</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  );
};

export default Restaurants