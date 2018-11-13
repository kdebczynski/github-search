export const getAllItems = (state) => (
    state.repositories && state.repositories.data && state.repositories.data.items
);

export const getFilteredItems = (state, filterCallback = () => true) => {
    const items = getAllItems(state);

    return items ? items.filter(item => filterCallback(item)) : undefined;
}

export const isProcessing = (state) => (
    state.repositories && state.repositories.processing
);

export const isUpdatedWithinLastYear = (item) => {
    const oneYearAgoTimestamp = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).getTime();
    const updatedAtTimestamp = new Date(item.updated_at).getTime();

    return updatedAtTimestamp > oneYearAgoTimestamp;
}

export const isStargazersCountAtLeast = (item, number) => (
    item.stargazers_count >= number
)