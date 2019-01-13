import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { fromJS } from 'immutable';

import middleware from '../redux/middlewares';

export default (rootReducer, rootSaga, customMiddlewares) => {
  const sagaMiddleware = createSagaMiddleware();

  function initStore(initialState = {}) {
    const middlewares = [sagaMiddleware, ...customMiddlewares];

    const store = createStore(
      rootReducer,
      fromJS(initialState),
      middleware(middlewares)
    );

    store.runSagaTask = () => {
      store.sagaTask = sagaMiddleware.run(rootSaga);
    };

    store.runSagaTask();

    return store;
  }

  return comp => withRedux(initStore)(withReduxSaga(comp));
};
