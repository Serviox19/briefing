import axios from 'axios';
import { GET_WEATHER } from './types';
import { GET_GEO_WEATHER } from './types';
import { GET_NEWS } from './types';

export const getWeather = ({ zip }) => {
  const apiKey = '10e2310812136c56b7f7d99a26e6ea19';
  let uri = 'http://api.openweathermap.org/data/2.5/weather';
  uri += `?zip=${zip},us&appid=${apiKey}&units=imperial`;

  const request = axios.get(uri);

  return {
    type: GET_WEATHER,
    payload: request
  }
};

export const getGeoWeather = ({ location }) => {
  const apiKey = '10e2310812136c56b7f7d99a26e6ea19';

  let uri = `http://api.openweathermap.org/data/2.5/weather`;
  uri += `?lat=${location.lat}&lon=${location.long}&appid=${apiKey}&units=imperial`;

  const request = axios.get(uri);

  return {
    type: GET_GEO_WEATHER,
    payload: request
  }
}

export const getNews = () => {
  const apiKey = 'b1eff68325b04271adb0e4956da610b4';

  let uri = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  const request = axios.get(uri);

  return {
    type: GET_NEWS,
    payload: request
  }
}

export const getPlaces = ({ location }) => {
  const apiKey = 'AIzaSyCka2mQJlMIfdJ2EcMfPi8Zx39ggavCOwY';

  let uri = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  uri += `?loation=${location.lat,location.long}&radius=5000&key=${apiKey}`;
  uri += `&`

  const request = axios.get(uri);

  return {
    type: GET_PLACES,
    payload: request
  }
}
