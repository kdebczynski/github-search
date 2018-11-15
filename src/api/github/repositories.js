import { endpoints } from "consts";
import request from "utils/request";

export const repositoriesApi = {
    languages: ({ owner, repo }) => request(endpoints.github.search.languages({ owner, repo }))
        .then(response => response.json())
};
