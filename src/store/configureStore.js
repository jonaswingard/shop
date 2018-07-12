import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from '../reducers/products';
import sectionsReducer from '../reducers/sections';
import authReducer from '../reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      sections: sectionsReducer,
      auth: authReducer
    }),
    compose(applyMiddleware(thunk))
  );

  return store;
};
