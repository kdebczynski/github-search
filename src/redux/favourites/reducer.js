import { actionTypes } from "./consts";

const favourites = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FAVOURITES_ADDED:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};

export default favourites;