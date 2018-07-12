import selectSections from '../../selectors/sections';
import sections from '../fixtures/sections';

test('should get a list of sorted sections', () => {
  const result = selectSections(sections);
  expect(result).toEqual([sections[1], sections[2], sections[0]]);
});
