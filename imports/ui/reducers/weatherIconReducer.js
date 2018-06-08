import React from 'react';
import { GET_GEO_WEATHER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_GEO_WEATHER:
      return action.payload.data.weather[0].icon;
    default:
      return state;
  }
}
