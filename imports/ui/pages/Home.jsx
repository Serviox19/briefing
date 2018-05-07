import React, { Component } from 'react';
import WeatherComponent from '../components/Weather';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      hasLocation: false,
      location: ''
    }

    if ("geolocation" in navigator) {
      const _this = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        _this.setState({
          hasLocation: true,
          location: position.coords
        });
      });
    } else {
      console.log('Cant get Location');
    }
  }

  renderComponents() {
    if (this.state.hasLocation) {
      return <WeatherComponent />
      console.log(this.state.location);
    } else {
      return (
        <div>
          <h1>fething location</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.renderComponents()}
      </div>
    );
  }
}
