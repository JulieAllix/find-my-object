// Action Types
import {
  CHANGE_FIELD,
} from '../actions/input';

// Initial State
const initialState = {
  searchValue: '',
};
  
// Reducer
const inputReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case CHANGE_FIELD:
      return {
          ...state,
          searchValue: action.value,
      };
    default:
      return state;
  }
};

export default inputReducer;