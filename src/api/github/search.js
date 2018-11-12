import { endpoints } from "consts";
import request from "utils/request";

export const searchApi = {
    repositories: (criteria) => request(endpoints.github.search.repositories(criteria))
};