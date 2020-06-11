// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SEARCH_SHELF = 'SEARCH_SHELF';

// Creators
export const changeField = (value) => ({
  type: CHANGE_FIELD,
  value,
});
export const searchShelf = (value) => ({
  type: SEARCH_SHELF,
  value,
});
