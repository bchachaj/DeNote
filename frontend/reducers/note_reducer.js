import React from 'react';
import merge from 'lodash/merge';
import {
   RECEIVE_ALL_NOTES,
   RECEIVE_ONE_NOTE,
   REMOVE_NOTE,
 } from '../actions/note_actions';
import {
  RECEIVE_ONE_NOTEBOOK
} from '../actions/notebook_actions';

const noteReducer = (state ={}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_ONE_NOTE:
      newState = merge({}, state, {[action.note.id]: action.note});
      return newState;
    case REMOVE_NOTE:
      let delState = merge({}, state);
      delete delState[action.note.id];
      return delState;
    // case RECEIVE_ONE_NOTEBOOK:
    //   return state;
    default:
      return state;
  }
};


export default noteReducer;
