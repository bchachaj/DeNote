import React from 'react';
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import noteReducer from './note_reducer';
import uiDisplayReducer from './ui_display';
const rootReducer = combineReducers({
  session: sessionReducer,
  notes: noteReducer,
  ui: uiDisplayReducer
});


export default rootReducer;
