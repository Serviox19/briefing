import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import newsReducer from './newsReducer';
import placesReducer from './placesReducer';
import iconReducer from './weatherIconReducer';

const reducers = combineReducers({
  weather: weatherReducer,
  news: newsReducer,
  places: placesReducer,
  icon: iconReducer
});

export default reducers;
