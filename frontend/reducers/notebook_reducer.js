import React from 'react';
import merge from 'lodash/merge';

import {
   RECEIVE_ALL_NOTEBOOKS,
   RECEIVE_ONE_NOTEBOOK,
   REMOVE_NOTEBOOK,
 } from '../actions/notebook_actions';


const notebookReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  const { notebook } = action;

  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;

    case RECEIVE_ONE_NOTEBOOK:
      const assign = {[notebook.id]: notebook};
      newState = merge({}, state, assign);
      return newState;

    case REMOVE_NOTEBOOK:
      let delState = merge({}, state);
      delete delState[notebook.id];
      return delState;

    default:
      return state;
  }
};

export default notebookReducer;
