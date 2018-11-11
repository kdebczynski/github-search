import { actionTypes } from "./consts";

const repositories = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.REPOSITORIES_FETCH_INITIATED:
          return state;
        default:
          return state;
      }
};

export default repositories;