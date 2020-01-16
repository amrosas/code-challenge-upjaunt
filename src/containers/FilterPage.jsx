import React from 'react';
import restaurantList from '../restaurants.json' 
import Restaurants from '../components/Restaurants';
import Filters from '../components/Filters';
import { getDistanceBetweenTwoCoordinates } from '../utils/coordinatesToKm';

const initialRestaurants = restaurantList.map(restaurant => {
  restaurant.count = 0;
  return restaurant;
});

class FilterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        place: '',
        tips: '',
        latitude: '',
        longitude: ''
      },
      restaurants: initialRestaurants,
    };

    this.placeRef = React.createRef();
    this.tipsRef = React.createRef();
    this.latitudeRef = React.createRef();
    this.longitudeRef = React.createRef();
  }

  clearFilters = () => {
    this.setState({
      filters: {},
      restaurants: initialRestaurants.map(restaurant => {
        if (this.state.restaurants[restaurant.name]) {
          restaurant.count = this.state.restaurants[restaurant.name].count
        }
        return restaurant;
      })
    });
  }

  setFilters = event => {
    const newFilter = event.target.value;
    const key = event.target.id
    this.setState(prevState => ({
      filters: {
          ...prevState.filters,
          [key]: newFilter
      }}));
  }

  getFilteredRestaurants = () => {
    let filteredRestaurants = this.state.restaurants;
    const textFilters = {
      place: this.state.filters.place,
      tips: this.state.filters.tips
    };

    Object.values(textFilters).forEach(filterName => {
      if (textFilters[filterName]) {
        filteredRestaurants = filteredRestaurants.filter(restaurant =>
          restaurant[filterName].indexOf(textFilters[filterName]) > 0
        );
      }
    });

    filteredRestaurants = filteredRestaurants.filter(restaurant =>
      getDistanceBetweenTwoCoordinates(restaurant, this.state.filters) < 1
    );
  }

  render() {
    return (
      <div>
        <Filters
          filters={this.state.filters}
          clearFilters={this.clearFilters}
          getFilteredRestaurants={this.getFilteredRestaurants}
          setFilters={this.setFilters}
          placeRef = {this.placeRef}
          tipsRef = {this.tipsRef}
          latitudeRef = {this.latitudeRef}
          longitudeRef = {this.longitudeRef}
        />
        <Restaurants restaurantList={restaurantList} />
      </div>
    );
  }
}

export default FilterPage;