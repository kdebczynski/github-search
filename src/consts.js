export const routes = {
    MAIN: "/",
    RESULTS: "/results"
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