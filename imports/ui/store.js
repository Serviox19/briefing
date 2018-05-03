import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import Async from './middlewares/async';

export const store = applyMiddleware(Async, promiseMiddleware)(createStore)
