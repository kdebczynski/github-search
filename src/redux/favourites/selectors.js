export const getAll = (state) => state.favourites;

export const getById = (state, id) => getAll(state).find(item => item.id === id);

export const getByLangAndDescription = (state, { language, repoOrDescription }) => {
    return getAll(state).find(item => {
        return item.language === language && item.repoOrDescription === repoOrDescription;
    })
};