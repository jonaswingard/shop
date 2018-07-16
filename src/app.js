import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import './styles/styles.scss';
import AppRouter, { history } from './routers/app-router';
import configureStore from './store/configureStore';
import {
  addProduct,
  startAddProduct,
  startSetProducts
} from './actions/products';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appContainer = document.getElementById('app');
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, appContainer);
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, appContainer);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    console.log('you are logged in');
    store.dispatch(startSetProducts()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/shop');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

// store.dispatch(addProduct({ name: 'foo' }));
// store.dispatch(addProduct({ name: 'bar' }));

// const productData = {
//   name: 'Product Added By Test',
//   sectionId: 100
// };
// store.dispatch(startAddProduct(productData));
