import { actionTypes } from "./consts";

export const repositoryLanguagesFetchInitiated = (criteria) => (
    { type: actionTypes.REPOSITORY_LANGULAGES_FETCH_INITIATED, payload: criteria }
);

export const repositoryLanguagesFetchSucceeded = (data) => (
    { type: actionTypes.REPOSITORY_LANGULAGES_FETCH_SUCCEEDED, payload: data }
);

export const repositoryLanguagesFetchFailed = (error) => (
    { type: actionTypes.REPOSITORY_LANGULAGES_FETCH_FAILED, payload: error }
);
