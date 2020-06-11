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
      console.log('Je suis dans le middleware !');
      axios.post(`../assets/StockossTest.js`, {
        input: state.input.searchValue,
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
