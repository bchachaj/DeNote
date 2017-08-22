import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';

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
  window.login = login; //works?
  window.logout = logout; //works?
  window.signup = signup; //works?
/////////End


  ReactDOM.render(<Root store={store}/>, root);
});
