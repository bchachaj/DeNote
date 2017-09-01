import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import * as APIUtil from './util/session_api_util';
import * as NoteAPI from './util/note_util';
import * as NotebookAPI from './util/notebook_util';
import * as TagAPI from './util/tag_util';

import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';
import { fetchAllNotes,
         fetchSingleNote,
         requestAllNotes,
         requestSingleNote
        } from './actions/note_actions';
import {
        requestAllNotebooks
} from './actions/notebook_actions';
import { selectAllNotes, selectAllNotebooks, selectAllTags } from './reducers/selectors.js';

import {
  requestSingleTag, requestAllTags
} from './actions/tag_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;

  } else {
    store = configureStore();
  }

//Testing ////////
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllNotes = NoteAPI.fetchAllNotes;
  window.fetchSingleNote = NoteAPI.fetchSingleNote;

  window.fetchAllTags = TagAPI.fetchAllTags;
  window.requestAllTags = requestAllTags;
  window.requestSingleTag = requestSingleTag;
  window.fetchSingleNote = TagAPI.fetchSingleTag;


  window.requestAllNotes = requestAllNotes;
  window.requestAllNotebooks = requestAllNotebooks;
  window.requestSingleNote = requestSingleNote;
  window.selectAllNotes = selectAllNotes;
  window.selectAllNotebooks = selectAllNotebooks;
  //notebook
  window.fetchAllNotebooks = NotebookAPI.fetchAllNotebooks;

/////////End

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});
