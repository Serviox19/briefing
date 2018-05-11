import React from 'react';
import { GET_WEATHER } from '../actions/types';
import { GET_GEO_WEATHER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload.data.main;
    case GET_GEO_WEATHER:
      return action.payload.data.main;
  }
  return state;
}
