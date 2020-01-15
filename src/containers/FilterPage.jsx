import React from 'react';
import * as restaurants from './restaurants.json' 
import Restaurants from '../components/Restaurants';

class FilterPage extends React {
  render() {
    console.log(restaurants);
    return (
      <Restaurants restaurants />
    )
  }
}

export default FilterPage;