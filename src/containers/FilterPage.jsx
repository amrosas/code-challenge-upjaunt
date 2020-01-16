import React from 'react';
import restaurantList from '../restaurants.json' 
import Restaurants from '../components/Restaurants';
import Filters from '../components/Filters';
import { getDistanceBetweenTwoCoordinates } from '../utils/coordinatesToKm';

class FilterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        Place: '',
        Tips: '',
        Latitude: '',
        Longitude: ''
      },
      restaurants: restaurantList.map(restaurant => {
        restaurant.count = 0;
        return restaurant;
      })
    };
  }

  clearFilters = () => {
    this.setState(prevState => ({
      filters: {},
      restaurants: restaurantList.map(restaurant => {
        const previousSearch = prevState.restaurants.find(stateRestaurant => stateRestaurant.Place === restaurant.Place);
        restaurant.count = previousSearch ? previousSearch.count : 0;
        return restaurant;
      })
    }));
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
      Place: this.state.filters.Place,
      Tips: this.state.filters.Tips
    };

    Object.keys(textFilters).forEach(filterName => {
      if (textFilters[filterName]) {
        filteredRestaurants = filteredRestaurants.filter(restaurant => 
          restaurant[filterName].indexOf(textFilters[filterName]) >= 0
        );
      }
    });

    if (this.state.filters.latitude || this.state.filters.longitude) {
      filteredRestaurants = filteredRestaurants.filter(restaurant => {
        const coordinateFilter = {
          latitude: this.state.filters.latitude || restaurant.latitude,
          longitude: this.state.filters.longitude || restaurant.longitude
        };
        return getDistanceBetweenTwoCoordinates(restaurant, coordinateFilter) < 1
      }
      );
    }

    filteredRestaurants.map(restaurant => {
      restaurant.count++;
      return restaurant;
    })

    this.setState({
      restaurants: [].concat(filteredRestaurants)
    });
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
        <Restaurants restaurantList={this.state.restaurants} />
      </div>
    );
  }
}

export default FilterPage;