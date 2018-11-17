import { actionTypes } from "./consts";

export const repositoriesFetchInitiated = (criteria) => (
    { type: actionTypes.REPOSITORIES_FETCH_INITIATED, payload: criteria }
);

export const repositoriesFetchSucceeded = (data) => (
    { type: actionTypes.REPOSITORIES_FETCH_SUCCEEDED, payload: data }
);

export const repositoriesFetchFailed = (error) => (
    { type: actionTypes.REPOSITORIES_FETCH_FAILED, payload: error }
);

export const repositoryRedirect = (url) => (
    { type: actionTypes.REPOSITORY_REDIRECT, payload: { url } }
);