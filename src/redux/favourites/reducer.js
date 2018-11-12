import { actionTypes } from "./consts";

const favourites = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FAVOURITES_ADDED:
            const newItem = action.payload || {};
            const isItemExist = state.some(item => {
                return item.repoOrDescription === newItem.repoOrDescription
                    && item.language === newItem.language;
            });

            return [
                ...state,
                ...(isItemExist ? [] : [action.payload])
            ];
        case actionTypes.FAVOURITES_DELETED:
            const itemToDelete = action.payload || {};
            const itemIndex = state.findIndex(item => {
                return item.repoOrDescription === itemToDelete.repoOrDescription
                    && item.language === itemToDelete.language;
            });

            return [
                ...state.slice(0, itemIndex),
                ...state.slice(itemIndex + 1)
            ];
        default:
            return state;
    }
};

export default favourites;