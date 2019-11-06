import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer.js'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  ui: uiReducer,
  session: sessionReducer
});

export default rootReducer;