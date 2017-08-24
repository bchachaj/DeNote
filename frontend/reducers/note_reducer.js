import React from 'react';
import merge from 'lodash/merge';
import {
   RECEIVE_ALL_NOTES,
   RECEIVE_ONE_NOTE,
   REMOVE_NOTE,
 } from '../actions/note_actions';

const noteReducer = (state ={}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      debugger;
      return merge({}, action.notes);
    case RECEIVE_ONE_NOTE:
      debugger;
      newState = merge({}, state, {[action.note.id]: action.note});
      return newState;
    default:
      return state;
  }
};


export default noteReducer;
