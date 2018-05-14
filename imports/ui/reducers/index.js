import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import newsReducer from './newsReducer';

const reducers = combineReducers({
  weather: weatherReducer,
  news: newsReducer
});

export default reducers;
