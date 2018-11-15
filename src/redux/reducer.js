import { combineReducers } from "redux";
import languages from "./languages/reducer";
import repositories from "./repositories/reducer";
import favourites from "./favourites/reducer";
import repositoryLanguages from "./repositoryLanguages/reducer";

export default combineReducers({
    languages,
    repositories,
    favourites,
    repositoryLanguages
});