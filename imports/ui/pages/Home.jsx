import React, { Component } from 'react';
import WeatherComponent from '../components/Weather';
import { Spinner } from '../components/Spinner';

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

      function error(error) {
        if (error) {
          _this.setState({ locationFetchFailed: true });
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
          <h1>Fething location failed, enter zipcode below please</h1>
        )
    } else {
        return (
          <Spinner />
        )
    }
  }

  render() {
    return (
      <div>
        {this.renderComponents()}
      </div>
    );
  }
}
