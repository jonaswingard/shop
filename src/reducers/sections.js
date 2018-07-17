import {
  ADD_SECTION,
  EDIT_SECTION,
  REMOVE_SECTION,
  SET_SECTIONS
} from '../actions/sections';

const sectionsReducerDefaultState = [];

export default (state = sectionsReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_SECTION:
      return [...state, action.section];
    case REMOVE_SECTION:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_SECTION:
      return state.map(
        section =>
          section.id === action.id
            ? {
                ...section,
                ...action.updates
              }
            : section
      );
    case SET_SECTIONS:
      return action.sections;

    default:
      return state;
  }
};
