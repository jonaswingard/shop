export const selectSections = sections =>
  [...sections].sort((a, b) => a.sortId - b.sortId);

export const selectSectionsDetailed = (sections, products) =>
  selectSections(sections).map(section => ({
    name: section.name,
    products: products
      .filter(product => section.id === product.sectionId)
      .sort((a, b) => a.name - b.name)
  }));
