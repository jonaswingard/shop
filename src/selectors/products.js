export default (products, { inShoppingList, inCart }) => {
  return products.filter(product => {
    const inShoppingListMatch = inShoppingList
      ? product.inShoppingList === inShoppingList
      : true;
    const inCartMatch = inCart ? product.inCart === inCart : true;

    return inShoppingListMatch && inCartMatch;
  });
};
