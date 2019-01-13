import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';

import { Actions } from './actions';
import INITIAL_STATE from './initial-state';

const setListData = (state = INITIAL_STATE, { list }) =>
  state.set('list', fromJS(list));

const reducer = createReducer(INITIAL_STATE, {
  [Actions.SET_LIST_DATA]: setListData
});

export default reducer;
