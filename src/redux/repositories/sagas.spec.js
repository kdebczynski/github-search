import fetch from "jest-fetch-mock";
import { takeLatest, call, put } from "redux-saga/effects";
import { actionTypes } from "./consts";
import { searchApi } from "api/github/search";
import { createQueryParams } from "utils/queryParams";
import { repositoriesFetchInitiated, repositoriesFetchSucceeded, repositoriesFetchFailed } from "./actions";
import { repositoriesFetchWatcher, fetchRepositories } from "./sagas";

describe("Repositories sagas", function () {

    describe("'repositoriesFetchWatcher' saga", function () {

        test("should take latest effect for REPOSITORIES_FETCH_INITIATED action", function () {
            const gen = repositoriesFetchWatcher();

            expect(gen.next().value).toEqual(takeLatest(actionTypes.REPOSITORIES_FETCH_INITIATED, fetchRepositories));
            expect(gen.next().done).toBeTrue();
        });
    });

    describe("'fetchRepositories' saga", function () {
        
        let gen;
        let next;
        const criteria = {
            q: "jest",
            sort: "stars",
            order: "desc",
            page: 1,
            per_page: 20
        };

        beforeEach(function () {
            gen = fetchRepositories(repositoriesFetchInitiated({ criteria }));
        });

        describe("when API request succeeded", function () {

            const mockedData = {
                items: [{ id: 1}]
            };

            test("should fetch repositories successfully", function () {
                next = gen.next();
                expect(next.value).toEqual(call(searchApi.repositories, createQueryParams(criteria)));

                next = gen.next(mockedData);
                expect(next.value).toEqual(put(repositoriesFetchSucceeded(mockedData)));

                next = gen.next();
                expect(next.done).toBeTrue();
            });
        });

        describe("when API request fails", function () {

            const errorMessage = "error message";
            const error = new Error(errorMessage);

            test("should dispatch REPOSITORIES_FETCH_FAILED action", function () {
                next = gen.next();
                expect(next.value).toEqual(call(searchApi.repositories, createQueryParams(criteria)));

                next = gen.throw(error);
                expect(next.value).toEqual(put(repositoriesFetchFailed(errorMessage)));

                next = gen.next();
                expect(next.done).toBeTrue();
            });
        });
    });
});
