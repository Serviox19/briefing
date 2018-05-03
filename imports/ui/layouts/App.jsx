import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store.js';
import reducers from '../reducers';

export const App = ({content}) => (
  <Provider store={store(reducers)}>
    <div id="main-container">
      {content}
    </div>
  </Provider>
);
