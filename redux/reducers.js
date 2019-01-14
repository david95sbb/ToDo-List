import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import list from './list/reducer';

const reducers = combineReducers({
  list,
  form: formReducer
});

export default reducers;
