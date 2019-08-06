import { endpoints } from "consts";
import request from "utils/request";
import requestWithSync from "utils/backgroundSyncRequest";

export const searchApi = {
    repositories: (criteria) => requestWithSync(endpoints.github.search.repositories(criteria))
        .then(response => response.json())
};