import axios from 'axios';

import {
    SEARCH_SHELF,
} from '../actions/input';

const findMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_SHELF: {
      // I launch an ajax request to my server
      // I'm sending the search data
      const state = store.getState();
      const input = state.input.searchValue;
      console.log('Je suis dans le middleware !');
      console.log(input);
      axios.post(`http://localhost:3001/src/assets/StockossTest.js`, {
        input: 'dq324',
      })
        .then((response) => {
          console.log(response);
          //store.dispatch(saveLoadedRecipes(loadedData));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    default:
      next(action);
      break;
  }
};

export default findMiddleware;
