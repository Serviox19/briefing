import React from 'react';
import { GET_WEATHER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER:
      console.log(action.payload);
      return action.payload.data.main;
  }
  return state;
}
