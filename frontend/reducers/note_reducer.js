import React from 'react';
import merge from 'lodash/merge';
import {
   RECEIVE_ALL_NOTES,
   RECEIVE_ONE_NOTE,
   REMOVE_NOTE,
 } from '../actions/note_actions';

import { RECEIVE_ALL_TAGGINGS } from '../actions/tagging_actions';

const noteReducer = (state ={}, action) => {
  Object.freeze(state);
  let newState;
  const { note } = action;

  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_ONE_NOTE:
      note.tags = action.note.tags;
      newState = merge({}, state,
     {[note.id]: note});
      return newState;
    case REMOVE_NOTE:
      let delState = merge({}, state);
      delete delState[note.id];
      return delState;
    default:
      return state;
  }
};


export default noteReducer;
