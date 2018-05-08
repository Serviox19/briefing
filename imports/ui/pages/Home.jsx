import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WeatherComponent from '../components/Weather';
import ZipCode from '../components/ZipForm';
import { Spinner } from '../components/Spinner';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      locationFetchFailed: false,
      hasLocation: false,
      hasZipCode: false,
      zipCode: '',
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
      return (
        <React.Fragment>
          <WeatherComponent
            location={this.state.location}
          />
        </React.Fragment>
      );
    } else if (this.state.locationFetchFailed) {
        return (
          <ZipCode zip={(zip) => this.setState({
            hasZipCode: true,
            zipCode: zip
          })} />
        );
    } else {
        return (
          <Spinner />
        );
    }
  }

  renderZipStuff() {
    if (this.state.hasZipCode) {
      $('#form-overlay').css({ 'display': 'none' })
      return (
        <React.Fragment>
          <WeatherComponent
            zipCode={this.state.zipCode}
          />
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderComponents()}
        {this.renderZipStuff()}
      </div>
    );
  }
}
