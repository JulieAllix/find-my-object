import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducer
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
);

export default store;