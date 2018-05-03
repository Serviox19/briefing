import axios from 'axios';
import { GET_WEATHER } from './types';

export const getWeather = () => {
  return (dispatch) => {
    const apiKey = '10e2310812136c56b7f7d99a26e6ea19';
    let zip = '07012';
    let uri = 'http://api.openweathermap.org/data/2.5/weather';
    uri += `?zip=${zip},us&appid=${apiKey}&units=imperial`;

    axios.get(uri)
    .then((response) => {
      let data = response.data;
      dispatch({ type: GET_WEATHER, payload: data })
    })
  }
};
