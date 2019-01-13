import { combineReducers } from 'redux-immutable';
import list from './list/reducer';

const reducers = combineReducers({
  list
});

export default reducers;
