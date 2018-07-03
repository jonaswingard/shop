import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import './styles/styles.scss';
import AppRouter from './routers/app-router';
import configureStore from './store/configureStore';
import { addProduct } from './actions/products';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(addProduct({ name: 'foo' }));
store.dispatch(addProduct({ name: 'bar' }));

ReactDOM.render(jsx, document.getElementById('app'));
