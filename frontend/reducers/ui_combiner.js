import React from 'react';
import { combineReducers } from 'redux';
import uiDisplayReducer from './ui_display';
import notebookUi from './notebook_ui';
import tagReducer from './tag_ui_reducer';
import tagUiReducer from './tag_reducer';

const uiReducer = combineReducers({
  tag_ui: tagUiReducer,
  notebook_ui: notebookUi,
  note_ui: uiDisplayReducer
});


export default uiReducer;
