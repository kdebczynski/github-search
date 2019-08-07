import { endpoints } from "consts";
import request from "utils/request";
import requestWithBackgroundSync from "utils/requestWithBackgroundSync";

export const repositoriesApi = {
    languages: ({ owner, repo }) => requestWithBackgroundSync(endpoints.github.search.languages({ owner, repo }))
        .then(response => response.json())
};
