import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Root from './components/root';
// import {fetchIngredients} from './actions/ingredient_actions';
// import {fetchRecipes, fetchRecipe} from './actions/recipe_actions';

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
  // TESTING 
  const root = document.getElementById('root');
  ReactDOM.render(<Root store = {store}/>, root);
});