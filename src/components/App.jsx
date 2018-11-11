import React from "react";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Main from "./pages/main/Main";
import SearchResults from "./pages/searchResults/SearchResults";
import "css/global.scss";

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={ Main } />
                <Route path="/results" component={ SearchResults } />
            </div>
        </Router>
    );
}

export default App;