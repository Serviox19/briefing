import React from 'react';
import { GET_NEWS } from '../actions/types';

export default ((state = [], action) => {
  switch (action.type) {
    case GET_NEWS:
      return action.payload.data.articles;
  }
  return state;
});
