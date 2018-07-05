export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
});

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const removeProduct = ({ id } = {}) => ({
  type: REMOVE_PRODUCT,
  id
});

export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const editProduct = (id, updates) => ({
  type: EDIT_PRODUCT,
  id,
  updates
});
