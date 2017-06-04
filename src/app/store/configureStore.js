import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default () => {
  const middlewares = [thunk, apiMiddleware]

  if (process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}
