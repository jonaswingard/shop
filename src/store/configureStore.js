import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/products';

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer
    }),
    compose(applyMiddleware(thunk))
  );

  return store;
};
