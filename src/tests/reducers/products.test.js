import productsReducer from '../../reducers/products';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT
} from '../../actions/products';
import products from '../fixtures/products';

test('should add a product', () => {
  const product = {
    id: 500,
    name: 'added test product'
  };

  const action = {
    type: ADD_PRODUCT,
    product
  };

  const state = productsReducer(products, action);
  expect(state).toEqual([...products, product]);
});

test('should remove a product', () => {
  const action = {
    type: REMOVE_PRODUCT,
    id: products[1].id
  };

  const state = productsReducer(products, action);
  expect(state).toEqual([products[0], products[2]]);
});

test('should edit a product', () => {
  const name = 'new product name';
  const action = {
    type: EDIT_PRODUCT,
    id: products[1].id,
    updates: {
      name
    }
  };

  const state = productsReducer(products, action);
  expect(state[1].name).toBe(name);
});
