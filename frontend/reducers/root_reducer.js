import React from 'react';
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import noteReducer from './note_reducer';
import notebookReducer from './notebook_reducer';
import uiReducer from './ui_combiner';
const rootReducer = combineReducers({
  session: sessionReducer,
  notes: noteReducer,
  notebooks: notebookReducer,
  ui: uiReducer
});


export default rootReducer;
