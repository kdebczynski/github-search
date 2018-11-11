import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import ReduxProvider from "components/ReduxProvider";
import reducer from "redux/reducer";
import saga from "redux/saga";

ReactDOM.render(
    <ReduxProvider reducer={ reducer } saga={ saga }>
        <App />
    </ReduxProvider>,
    document.getElementById("app")
);