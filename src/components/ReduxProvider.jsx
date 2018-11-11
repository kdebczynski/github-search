import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

const ReduxProvider = ({ children, reducer, saga }) => {
    const sagaMiddleware = createSagaMiddleware()

    const composeEnhancers = compose;

    const store = createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware
            )
        )
    );

    sagaMiddleware.run(saga);

    return (
        <Provider
            { ...{ store } }
        >
            { children }
        </Provider>
    );
};

export default ReduxProvider;