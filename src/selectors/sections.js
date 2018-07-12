export default sections => {
  return [...sections].sort((a, b) => a.sortId - b.sortId);
};
