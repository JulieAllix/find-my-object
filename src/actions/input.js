// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SAVE_POSITION = 'SAVE_POSITION';
export const CHANGE_OPACITY_STATUS = 'CHANGE_OPACITY_STATUS';

// Creators
export const changeField = (value) => ({
  type: CHANGE_FIELD,
  value,
});
export const savePosition = (value) => ({
  type: SAVE_POSITION,
  value,
});
export const changeOpacityStatus = (bool) => ({
  type: CHANGE_OPACITY_STATUS,
  bool,
});
