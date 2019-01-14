import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';

import { Actions } from './actions';
import INITIAL_STATE from './initial-state';

const setListData = (state = INITIAL_STATE, { list }) =>
  state.set('list', fromJS(list));

const setItemCreated = (state = INITIAL_STATE, { status }) =>
  state.set('itemCreated', status);

const reducer = createReducer(INITIAL_STATE, {
  [Actions.SET_LIST_DATA]: setListData,
  [Actions.SET_ITEM_CREATED]: setItemCreated
});

export default reducer;
