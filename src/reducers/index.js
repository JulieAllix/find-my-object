import { combineReducers } from 'redux';

import mapReducer from './map';
import inputReducer from './input';

const rootReducer = combineReducers({
  map: mapReducer,
  input: inputReducer,
});

export default rootReducer;