import languages from "data/languages";

const defaultState = Object.keys(languages).map(langKey => ({
    value: langKey,
    name: languages[langKey]
}));

const favourites = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default favourites;