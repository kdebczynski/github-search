export const createGithubQueryParams = (criteria) => {
    return Object.keys(criteria).reduce((previousValue, currentValue) => {
        const separator = !!previousValue ? "&" : "?";
        return previousValue + `${separator}${currentValue}=${criteria[currentValue]}`;
    }, "");
};
