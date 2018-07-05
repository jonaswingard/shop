import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from '../reducers/products';
import sectionsReducer from '../reducers/sections';

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      sections: sectionsReducer
    }),
    compose(applyMiddleware(thunk))
  );

  return store;
};
