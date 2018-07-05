import database from '../firebase/firebase';

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

// DB
export const startAddProduct = (productData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { name = '', sectionId = 0 } = productData;

    const product = { name, sectionId };

    return database
      .ref(`users/${uid}/products`)
      .push(product)
      .then(ref => {
        dispatch(
          addProduct({
            id: ref.key,
            ...product
          })
        );
      });
  };
};
