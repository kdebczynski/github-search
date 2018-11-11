import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Main from "./pages/Main";
import SearchResults from "./pages/SearchResults";
import "css/global.scss";

const App = () => {
    return (
        <Router>
            <div className="container">
                <Route exact path="/" component={ Main } />
                <Route path="/results" component={ SearchResults } />
            </div>
        </Router>
    );
}

export default App;