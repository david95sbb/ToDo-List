/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';

export default function createMiddleware(middlewares) {
  const middleware = applyMiddleware(...middlewares);
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(fromJS({}))
      : compose;

  return composeEnhancers(middleware);
}
