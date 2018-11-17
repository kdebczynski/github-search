import React from "react";
import history from "utils/history";
import { routes } from "consts";
import { Router, Route } from "react-router-dom";
import Main from "./pages/main/MainContainer";
import SearchResults from "./pages/searchResults/SearchResultsContainer";
import "css/global.scss";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: yellow[200],
        }
    },
});

const App = () => {
    return (
        <MuiThemeProvider theme={ theme }>
            <Router history={ history } >
                <div>
                    <Route exact path={ routes.MAIN } component={ Main } />
                    <Route exact path={ routes.RESULTS + "/:favoutites" } component={ SearchResults } />
                </div>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;