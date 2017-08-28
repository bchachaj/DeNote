import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import * as NoteAPI from './util/note_util';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';
import { fetchAllNotes, fetchSingleNote, requestAllNotes, requestSingleNote } from './actions/note_actions';
import { selectAllNotes } from './reducers/selectors.js';

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
  window.requestAllNotes = requestAllNotes;
  window.requestSingleNote = requestSingleNote;
  window.selectAllNotes = selectAllNotes;
/////////End

  ReactDOM.render(<Root store={store}/>, root);
});
