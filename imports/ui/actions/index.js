import axios from 'axios';
import { GET_WEATHER } from './types';
import { GET_GEO_WEATHER } from './types';
import { GET_NEWS } from './types';
import { GET_PLACES } from './types';

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
  let lat = location.latitude.toFixed(7);
  let long = location.longitude.toFixed(7);

  let uri = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
  uri += `?location=${lat},${long}&radius=1500`;
  uri += `&type=restaurant&keyword=cruise&key=${apiKey}`;

  Session.set('query', uri)
  let query = Session.get('query');
  console.log(query);


  Meteor.call('getPlaces', query, (error, res) => {
    Session.set('placesResponse', res.data.results);
  });

  let request = Session.get('placesResponse');

  return {
    type: GET_PLACES,
    payload: request
  }

  //valid https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.8469865,-74.1637401&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyCka2mQJlMIfdJ2EcMfPi8Zx39ggavCOwY
}
