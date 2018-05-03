import React, { Component } from 'react';
import WeatherComponent from '../components/Weather';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <WeatherComponent />
      </div>
    );
  }
}
