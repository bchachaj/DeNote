import React from 'react';
import merge from 'lodash/merge';

import {
   RECEIVE_ALL_NOTEBOOKS,
   RECEIVE_ONE_NOTEBOOK,
   REMOVE_NOTEBOOK,
 } from '../actions/notebook_actions';


const notebookReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {

    case RECEIVE_ALL_NOTEBOOKS:
      return merge({}, action.notebooks);
      
    case RECEIVE_ONE_NOTEBOOK:
      newState = merge(
                    {},
                    state,
                   {[action.notebook.id]: action.notebook}
                    );
      return newState;

    case REMOVE_NOTEBOOK:
      let delState = merge({}, state);
      delete delState[action.notebook.id];
      return delState;

    default:
      return state;
  }
};

export default notebookReducer;
