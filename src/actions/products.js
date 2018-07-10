import database from '../firebase/firebase';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
});

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
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

export const startEditProduct = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/products/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editProduct(id, updates));
      });
  };
};

export const startRemoveProduct = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/products`)
      .remove()
      .then(() => {
        dispatch(removeProduct({ id }));
      });
  };
};

export const startSetProducts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/products`)
      .once('value')
      .then(snapshot => {
        const products = [];

        snapshot.forEach(childSnapshot => {
          products.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setProducts(products));
      });
  };
};
