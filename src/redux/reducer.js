import { combineReducers } from "redux";
import repositories from "./repositories/reducer";
import favourites from "./favourites/reducer";

export default combineReducers({
    repositories,
    favourites
});