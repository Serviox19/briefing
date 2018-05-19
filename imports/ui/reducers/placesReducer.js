import React from 'react';
import { GET_PLACES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_PLACES:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
