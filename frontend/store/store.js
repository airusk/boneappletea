import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) =>
  // removed logger here, comment line below back in to check store updates.
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
