import { actionTypes } from "./consts";

export const favouritesAdded = (favourites) => (
    { type: actionTypes.FAVOURITES_ADDED, payload: favourites }
);

export const favouritesDeleted = (favourites) => (
    { type: actionTypes.FAVOURITES_DELETED, payload: favourites }
);

export const favouritesSearch = (favourites) => (
    { type: actionTypes.FAVOURITES_SEARCH_INITIATED, payload: favourites }
);