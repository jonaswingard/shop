import {
  selectSections,
  selectSectionsDetailed
} from '../../selectors/sections';
import sections from '../fixtures/sections';
import products from '../fixtures/products';

test('should get a list of sorted sections', () => {
  const result = selectSections(sections);
  expect(result).toEqual([sections[1], sections[2], sections[0]]);
});

test('should get a list of sections with products as children', () => {
  const result = selectSectionsDetailed(sections, products)[0];
  expect(result).toEqual({
    name: sections[1].name,
    products: [products[1]]
  });
});
