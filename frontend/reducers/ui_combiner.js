import React from 'react';
import { combineReducers } from 'redux';
import uiDisplayReducer from './ui_display';
import notebookUi from './notebook_ui';
const uiReducer = combineReducers({
  notebook_ui: notebookUi,
  note_ui: uiDisplayReducer
});


export default uiReducer;
