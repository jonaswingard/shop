import selectProducts from '../../selectors/products';
import products from '../fixtures/products';

test('should filter by products in shopping-list', () => {
  const filters = {
    inShoppingList: true
  };
  const result = selectProducts(products, filters);
  expect(result).toEqual([products[0], products[2]]);
});

test('should filter by products in cart', () => {
  const filters = {
    inCart: true
  };
  const result = selectProducts(products, filters);
  expect(result).toEqual([products[0]]);
});
