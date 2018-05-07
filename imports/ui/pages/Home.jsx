import React, { Component } from 'react';
import WeatherComponent from '../components/Weather';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      locationFetchFailed: false,
      hasLocation: false,
      location: ''
    }

    //Get Location and handle any errors
    if ("geolocation" in navigator) {
      const _this = this;
      navigator.geolocation.getCurrentPosition(success, error);

      function success(position) {
        _this.setState({
          hasLocation: true,
          location: position.coords
        });
      }

      function error(err) {
        if (error.code == error.PERMISSION_DENIED) {
          _this.setState({ locationFetchFailed: true })
        } else {
          return err;
        }
      }
    }
  }//end constructor

  renderComponents() {
    if (this.state.hasLocation) {
      return <WeatherComponent location={this.state.location} />
      console.log(this.state.location);
    } else if (this.state.locationFetchFailed) {
        return (
          <h1>fething location failed enter zipcode below please</h1>
        )
    } else {
        return (
          <h1>fething location</h1>
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
