import {
  selectProducts,
  selectProductsDetailed
} from '../../selectors/products';
import products from '../fixtures/products';
import sections from '../fixtures/sections';

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

test('should get products with the sectionname', () => {
  const result = selectProductsDetailed(products, sections)[0];
  expect(result).toEqual({ ...products[0], section: sections[0] });
});
