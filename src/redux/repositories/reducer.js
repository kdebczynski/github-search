import { actionTypes } from "./consts";
import { notInitiated, processing, success, error } from "utils/remoteData";

const repositories = (state = notInitiated(), action) => {
    switch (action.type) {
        case actionTypes.REPOSITORIES_FETCH_INITIATED:
            return {
                ...state,
                ...processing({ reset: true })
            };
        case actionTypes.REPOSITORIES_NEXT_PAGE_FETCH_INITIATED:
            return {
                ...state,
                ...processing()
            };
        case actionTypes.REPOSITORIES_FETCH_SUCCEEDED:
            return {
                ...state,
                ...success({ data: action.payload })
            };
        case actionTypes.REPOSITORIES_NEXT_PAGE_FETCH_SUCCEEDED:
            return {
                ...state,
                ...success({ data: action.payload })
            };
        case actionTypes.REPOSITORIES_FETCH_FAILED:
            return {
                ...state,
                ...error({ error: action.payload })
            };
        case actionTypes.REPOSITORIES_NEXT_PAGE_FETCH_FAILED:
            return {
                ...state,
                ...error({ error: action.payload })
            };
        default:
            return state;
    }
};

export default repositories;
