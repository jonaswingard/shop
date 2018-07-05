export const ADD_SECTION = 'ADD_SECTION';
export const addSection = section => ({
  type: ADD_SECTION,
  section
});

export const REMOVE_SECTION = 'REMOVE_SECTION';
export const removeSection = ({ id } = {}) => ({
  type: REMOVE_SECTION,
  id
});

export const EDIT_SECTION = 'EDIT_SECTION';
export const editSection = (id, updates) => ({
  type: EDIT_SECTION,
  id,
  updates
});
