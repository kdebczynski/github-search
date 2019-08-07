import { endpoints } from "consts";
import request from "utils/request";
import requestWithBackgroundSync from "utils/requestWithBackgroundSync";

export const searchApi = {
    repositories: (criteria) => requestWithBackgroundSync(endpoints.github.search.repositories(criteria))
        .then(response => response.json())
};