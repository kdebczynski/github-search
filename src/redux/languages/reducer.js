import languagesData from "data/languages";

const defaultState = Object.keys(languagesData).map(langKey => ({
    value: langKey,
    name: languagesData[langKey]
}));

const languages = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default languages;