import React, { Component } from 'react';
import Weather from '../components/Weather';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Weather />
      </div>
    );
  }
}
