import { takeLatest, put } from 'redux-saga/effects';

import listActions, { Actions } from './actions';

export function* getList() {
  try {
    // const result = yield call(ProductService.getProductCategories);
    yield put(
      listActions.setListData([
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' }
      ])
    );
  } catch (e) {
    console.warn(e);
  }
}

export default [takeLatest(Actions.GET_LIST_DATA, getList)];
