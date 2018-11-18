export const publicPath = `${WEBPACK_PUBLIC_PATH}` || "./";

export const routes = {
    MAIN: `${publicPath}`,
    RESULTS: `${publicPath}results`
};

export const urls = {
    githubApi: "https://api.github.com"
};

export const endpoints = {
    github: {
        search: {
            repositories: (criteria = "") => `${urls.githubApi}/search/repositories${criteria}`,
            languages: ({ owner, repo }) => `${urls.githubApi}/repos/${owner}/${repo}/languages`
        }
    }
};
