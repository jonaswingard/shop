import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  SET_PRODUCTS
} from '../actions/products';

const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];
    case REMOVE_PRODUCT:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_PRODUCT:
      return state.map(
        product =>
          product.id === action.id
            ? {
                ...product,
                ...action.updates
              }
            : product
      );
    case SET_PRODUCTS:
      return action.products;

    default:
      return state;
  }
};
