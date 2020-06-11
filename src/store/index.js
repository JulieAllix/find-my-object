import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import findMiddleware from '../middlewares/findMiddleware';

// Reducer
import rootReducer from '../reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    findMiddleware,
    // ... autres middlewares
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;