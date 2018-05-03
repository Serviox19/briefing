import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions';

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWeather();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Weather Component</h1>
        <h3>Current Temp: {}</h3>
        <h3>Min: {}</h3>
        <h3>Max: {}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { weather: state.weather }
}

export default
connect(mapStateToProps, actions)(WeatherComponent);
