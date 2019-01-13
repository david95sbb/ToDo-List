import { takeLatest, put, call } from 'redux-saga/effects';
import firebase from 'firebase/app';
import 'firebase/database';
import ReduxSagaFirebase from 'redux-saga-firebase';

import listActions, { Actions } from './actions';

let rfsApp = null;

if (!firebase.apps.length) {
  const fsApp = firebase.initializeApp({
    apiKey: 'AIzaSyDgUu1enLLYoTNDJopxF8yQBKYm5vJEkU4',
    authDomain: 'todolist-38fc9.firebaseapp.com',
    databaseURL: 'https://todolist-38fc9.firebaseio.com',
    projectId: 'todolist-38fc9',
    storageBucket: 'todolist-38fc9.appspot.com',
    messagingSenderId: '995219587994'
  });

  rfsApp = new ReduxSagaFirebase(fsApp);
} else {
  rfsApp = new ReduxSagaFirebase(firebase.app());
}

export function* getList() {
  try {
    const response = yield call(rfsApp.database.read, 'listas');
    yield put(listActions.setListData(response));
  } catch (e) {
    console.warn(e);
  }
}

export function* createList() {
  try {
    yield call(rfsApp.database.create, `listas`, {
      id: 2,
      name: 'item 2'
    });
  } catch (e) {
    console.warn(e);
  }
}

export default [
  takeLatest(Actions.GET_LIST_DATA, getList),
  takeLatest(Actions.CREATE_LIST_DATA, createList)
];
