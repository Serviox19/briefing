import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import newsReducer from './newsReducer';
import placesReducer from './placesReducer';

const reducers = combineReducers({
  weather: weatherReducer,
  news: newsReducer,
  places: placesReducer
});

export default reducers;
