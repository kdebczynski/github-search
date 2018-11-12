import React from "react";
import history from "utils/history";
import { routes } from "consts";
import {
    Router,
    Route
} from "react-router-dom";
import Main from "./pages/main/MainContainer";
import SearchResults from "./pages/searchResults/SearchResults";
import "css/global.scss";

const App = () => {
    return (
        <Router history={ history } >
            <div>
                <Route exact path={ routes.MAIN } component={ Main } />
                <Route exact path={ routes.RESULTS + "/:id" } component={ SearchResults } />
            </div>
        </Router>
    );
}

export default App;