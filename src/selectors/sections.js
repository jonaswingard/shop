export const selectSections = sections =>
  [...sections].sort((a, b) => a.sortId - b.sortId);

export const selectSectionsDetailed = (sections, products) =>
  selectSections(sections).map(section => ({
    ...section,
    products: products
      .filter(product => section.id === product.sectionId)
      .sort((a, b) => {
        if (a.inCart === b.inCart) {
          return a.name.localeCompare(b.name);
        } else if (a.inCart) {
          return 1;
        } else if (b.inCart) return -1;

        return a.name.localeCompare(b.name);
      })
  }));
