import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Root from './components/root';
import {login, signup, logout} from './actions/session_actions';
import {fetchRecipes, fetchRecipe} from './actions/recipe_actions';

document.addEventListener('DOMContentLoaded',() => {
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
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  // window.logout = logout;
  window.login = login;
  // window.signup = signup;
  window.fetchRecipe = fetchRecipe;
  window.fetchRecipes = fetchRecipes;
  // TESTING 
  const root = document.getElementById('root');
  ReactDOM.render(<Root store = {store}/>, root);
});