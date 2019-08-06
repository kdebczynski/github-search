import { endpoints } from "consts";
import request from "utils/request";
import requestWithSync from "utils/request";

export const repositoriesApi = {
    languages: ({ owner, repo }) => requestWithSync(endpoints.github.search.languages({ owner, repo }))
        .then(response => response.json())
};
