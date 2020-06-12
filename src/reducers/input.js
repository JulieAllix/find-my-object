// Action Types
import {
  CHANGE_FIELD,
  CHANGE_OPACITY_STATUS,
} from '../actions/input';

// Initial State
const initialState = {
  searchValue: '',
  opacityStatus: false,
};
  
// Reducer
const inputReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
          ...state,
          searchValue: action.value,
      };
      
    case CHANGE_OPACITY_STATUS:
      return {
          ...state,
          opacityStatus: action.bool,
      };
      
    default:
      return state;
  }
};

export default inputReducer;