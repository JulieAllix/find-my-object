// Action Types
import {
  SAVE_POSITION,
} from '../actions/input';

// Initial State
const initialState = {
  highlightedShelf: '',
};

// Reducer
const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POSITION:
      return {
          ...state,
          highlightedShelf: action.value,
      };
    default:
      return state;
  }
};

export default mapReducer;