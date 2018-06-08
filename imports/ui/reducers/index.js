import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import newsReducer from './newsReducer';
import iconReducer from './weatherIconReducer';

const reducers = combineReducers({
  weather: weatherReducer,
  news: newsReducer,
  icon: iconReducer
});

export default reducers;
