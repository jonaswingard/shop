export const selectProducts = (products, { inShoppingList, inCart }) =>
  products
    .filter(product => {
      const inShoppingListMatch = inShoppingList
        ? product.inShoppingList === inShoppingList
        : true;
      const inCartMatch = inCart ? product.inCart === inCart : true;

      return inShoppingListMatch && inCartMatch;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

export const selectProductsDetailed = (products, sections) => {
  return products
    .map(product => ({
      ...product,
      section: sections.find(section => section.id === product.sectionId)
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};
