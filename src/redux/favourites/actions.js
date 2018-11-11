import { actionTypes } from "./consts";

export const favouritesAdded = (favourites) => (
    { type: actionTypes.FAVOURITES_ADDED, payload: favourites }
);