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
  requestSingleTag, requestAllTags, requestDeleteTag
} from './actions/tag_actions';

import { createTaggings, requestAllTaggings } from './actions/tagging_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;

  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});
