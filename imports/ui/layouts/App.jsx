import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from "redux-promise";

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const App = ({content}) => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div id="main-container">
      {content}
    </div>
  </Provider>
);
