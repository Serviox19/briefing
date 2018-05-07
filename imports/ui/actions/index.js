import axios from 'axios';
import { GET_WEATHER } from './types';
import { GET_LOCATION } from './types';

export const getWeather = () => {
  const apiKey = '10e2310812136c56b7f7d99a26e6ea19';
  let zip = '07012';
  let uri = 'http://api.openweathermap.org/data/2.5/weather';
  uri += `?zip=${zip},us&appid=${apiKey}&units=imperial`;

  const request = axios.get(uri);

  return {
    type: GET_WEATHER,
    payload: request
  }
};
