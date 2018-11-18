import {
    repositoriesFetchInitiated,
    repositoriesFetchSucceeded,
    repositoriesFetchFailed
} from "./actions";
import repositoriesReducer from "./reducer";
import { notInitiated, processing, success, error } from "utils/remoteData";

describe("repositories reducer", function () {

    test("should return initial state", function () {
        expect(repositoriesReducer(undefined, {})).toEqual(notInitiated());
    });

    test("should handle REPOSITORIES_FETCH_INITIATED action", function () {
        const action = repositoriesFetchInitiated();

        expect(repositoriesReducer(notInitiated(), action)).toEqual(processing());
    });

    describe("handle REPOSITORIES_FETCH_SUCCEEDED action", function () {

        describe("when there is no data on state", function () {

            test("should return recieved data with success state", function () {
                const data = {
                    total_count: 1,
                    incomplete_results: false,
                    items: [{ id: 1}]
                };
                const action = repositoriesFetchSucceeded(data);
        
                expect(repositoriesReducer(notInitiated(), action)).toEqual(success({ data }));
            });
        });

        describe("when there is already data on state", function () {

            let initState;

            const data = {
                items: [{ id: 1}]
            };

            beforeEach(function () {
                initState = success({ data });
            });

            describe("and payload containd the new data", function () {

                test("should return updated items data with success state", function () {
                    const newData = {
                        items: [{ id: 2}]
                    };
                    const action = repositoriesFetchSucceeded(newData);
    
                    expect(repositoriesReducer(initState, action)).toEqual(success({ data: {
                        items: data.items.concat(newData.items)
                    } }));
                });
            });
        })
    });

    test("should handle REPOSITORIES_FETCH_FAILED action", function () {
        const errorMeassage = "error message";
        const errorObj = { msg: errorMeassage };
        const action = repositoriesFetchFailed(errorObj);

        expect(repositoriesReducer(notInitiated(), action)).toEqual(error({
            error: errorObj
        }));
    });
});
