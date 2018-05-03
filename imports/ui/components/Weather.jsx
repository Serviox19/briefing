import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      temp: '',
      temp_min: '',
      temp_max: ''
    }

    const apiKey = '10e2310812136c56b7f7d99a26e6ea19';
    let zip = '07012';
    let uri = 'http://api.openweathermap.org/data/2.5/weather';
    uri += `?zip=${zip},us&appid=${apiKey}&units=imperial`;

    axios.get(uri)
    .then((response) => {
      let data = response.data.main;
      console.log(data);
      this.setState({
        temp: data.temp,
        temp_min: data.temp_min,
        temp_max: data.temp_max
      })
    });
  }

  componentDidMount() {
    //stuff
  }

  render() {
    return (
      <div>
        <h1>Weather Component</h1>
        <h3>Current Temp: {this.state.temp}</h3>
        <h3>Min: {this.state.temp_min}</h3>
        <h3>Max: {this.state.temp_max}</h3>
      </div>
    );
  }
}

export default Weather;
