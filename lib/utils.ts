export const getTitleCase = (text: string) => {
  return `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`;
};
