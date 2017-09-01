import React from 'react';
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import noteReducer from './note_reducer';
import notebookReducer from './notebook_reducer';
import uiReducer from './ui_combiner';
import tagReducer from './tag_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  notes: noteReducer,
  notebooks: notebookReducer,
  tags: tagReducer,
  ui: uiReducer
});


export default rootReducer;
