import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  startAddProduct,
  startRemoveProduct,
  startSetProducts,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCTS
} from '../../actions/products';
import database from '../../firebase/firebase';
import products from '../fixtures/products';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const productsData = {};
  products.forEach(({ id, name, sectionId }) => {
    productsData[id] = { name, sectionId };
  });
  database
    .ref(`users/${uid}/products`)
    .set(productsData)
    .then(() => done());
});

test('should remove product from the database', done => {
  const store = createMockStore(defaultAuthState);
  const id = products[2].id;
  store
    .dispatch(startRemoveProduct({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: REMOVE_PRODUCT,
        id
      });

      return database.ref(`products/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should add product to the database and store', done => {
  const store = createMockStore(defaultAuthState);
  const productData = {
    name: 'Product Added By Test',
    sectionId: 100
  };

  store
    .dispatch(startAddProduct(productData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: ADD_PRODUCT,
        product: {
          id: expect.any(String),
          ...productData
        }
      });

      return database
        .ref(`users/${uid}/products/${actions[0].product.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(productData);
      done();
    });
});

test('should fetch the products from the database', done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetProducts()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: SET_PRODUCTS,
      products
    });
    done();
  });
});
