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


import { RECEIVE_ALL_TAGGINGS } from '../actions/tagging_actions';

const noteReducer = (state ={}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_ONE_NOTE:
      const note = action.note;
      note.tags = action.note.tags;
      newState = merge({}, state,
     {[action.note.id]: note});
      return newState;
    case RECEIVE_ALL_TAGGINGS:
      return state;
    case REMOVE_NOTE:
      let delState = merge({}, state);
      delete delState[action.note.id];
      return delState;
    default:
      return state;
  }
};


export default noteReducer;
