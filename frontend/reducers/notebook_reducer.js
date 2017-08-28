import React from 'react';
import merge from 'lodash/merge';

import {
   RECEIVE_ALL_NOTEBOOKS,
   RECEIVE_ONE_NOTEBOOK,
   REMOVE_NOTEBOOK,
 } from '../actions/notebook_actions';


const notebookReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return merge({}, action.notebooks);
    default:
      return state;
  }
};

export default notebookReducer;
