import React from 'react';
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import noteReducer from './note_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  notes: noteReducer
});


export default rootReducer;
