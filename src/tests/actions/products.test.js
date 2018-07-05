import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startAddProduct, ADD_PRODUCT } from '../../actions/products';
import database from '../../firebase/firebase';
import products from '../fixtures/products';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const productsData = {};
  products.forEach(({ id, name }) => {
    productsData[id] = { name };
  });
  database
    .ref(`users/${uid}/products`)
    .set(productsData)
    .then(() => done());
});

test.only('should add product to database and store', done => {
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
