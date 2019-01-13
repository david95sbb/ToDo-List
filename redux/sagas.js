import { all } from 'redux-saga/effects';
import listSagas from './list/sagas';

function* rootSaga() {
  yield all([listSagas]);
}

export default rootSaga;
