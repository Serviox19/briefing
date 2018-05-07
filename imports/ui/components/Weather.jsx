import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWeather();
  }

  renderWeather() {
    return (
      <React.Fragment>
        <h3>Temperature: {this.props.weather.temp}</h3>
        <h3>Max Temp: {this.props.weather.temp_max}</h3>
        <h3>Min Temp: {this.props.weather.temp_min}</h3>
        <h3>Humidity: {this.props.weather.humidity}</h3>
      </React.Fragment>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Weather Component</h2>
        {this.renderWeather()}
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps, actions)(WeatherComponent);
