import React from 'react';
import { GET_PLACES } from '../actions/types';

export default ((state = [], action) => {
  switch (action.type) {
    case GET_PLACES:
      return action.payload.data;
  }
  return state;
})
