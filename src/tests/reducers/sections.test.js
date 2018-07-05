import sectionsReducer from '../../reducers/sections';
import {
  ADD_SECTION,
  EDIT_SECTION,
  REMOVE_SECTION
} from '../../actions/sections';
import sections from '../fixtures/sections';

test('should add a section', () => {
  const section = {
    id: 600,
    name: 'added test section'
  };

  const action = {
    type: ADD_SECTION,
    section
  };

  const state = sectionsReducer(sections, action);
  expect(state).toEqual([...sections, section]);
});

test('should remove a section', () => {
  const action = {
    type: REMOVE_SECTION,
    id: sections[1].id
  };

  const state = sectionsReducer(sections, action);
  expect(state).toEqual([sections[0], sections[2]]);
});

test('should edit a section', () => {
  const name = 'new section name';
  const action = {
    type: EDIT_SECTION,
    id: sections[1].id,
    updates: {
      name
    }
  };

  const state = sectionsReducer(sections, action);
  expect(state[1].name).toBe(name);
});
