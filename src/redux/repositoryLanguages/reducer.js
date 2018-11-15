import { actionTypes } from "./consts";
import { notInitiated, processing, success, error } from "utils/remoteData";

const repositories = (state = notInitiated(), action) => {
    switch (action.type) {
        case actionTypes.REPOSITORY_LANGULAGES_FETCH_INITIATED:
            return {
                ...state,
                ...processing()
            };
        case actionTypes.REPOSITORY_LANGULAGES_FETCH_SUCCEEDED:
            const existingItems = state.data && [...state.data] || [];

            existingItems.push(action.payload);

            return {
                ...state,
                ...success({ data: existingItems })
            };
        case actionTypes.REPOSITORY_LANGULAGES_FETCH_FAILED:
            return {
                ...state,
                ...error({ error: action.payload })
            };
        default:
            return state;
    }
};

export default repositories;
