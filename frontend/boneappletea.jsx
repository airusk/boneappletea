import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Root from './components/root';
import {login, signup, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded',() => {
  // TESTING
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  window.logout = logout;
  window.login = login;
  window.signup = signup;
  // TESTING 
  const root = document.getElementById('root');
  ReactDOM.render(<Root store = {store}/>, root);
});