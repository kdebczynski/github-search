import { actionTypes } from "./consts";
import { notInitiated, processing, success, error } from "utils/remoteData";

const repositories = (state = notInitiated(), action) => {
    switch (action.type) {
        case actionTypes.REPOSITORIES_FETCH_INITIATED:
            const shouldReset = action.payload && action.payload.reset;

            return {
                ...state,
                ...processing({ reset: shouldReset })
            };
        case actionTypes.REPOSITORIES_FETCH_SUCCEEDED:
            const existingItems = state.data && state.data.items && [...state.data.items] || [];
            const newItems = action.payload && action.payload.items || [];

            return {
                ...state,
                ...success({ data: {
                    ...action.payload,
                    items: existingItems.concat(newItems)
                }})
            };
        case actionTypes.REPOSITORIES_FETCH_FAILED:
            return {
                ...state,
                ...error({ error: action.payload })
            };
        default:
            return state;
    }
};

export default repositories;
