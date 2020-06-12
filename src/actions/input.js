// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SAVE_POSITION = 'SAVE_POSITION';

// Creators
export const changeField = (value) => ({
  type: CHANGE_FIELD,
  value,
});
export const savePosition = (value) => ({
  type: SAVE_POSITION,
  value,
});
