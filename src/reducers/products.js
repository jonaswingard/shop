const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.product];
    default:
      return state;
  }
};
