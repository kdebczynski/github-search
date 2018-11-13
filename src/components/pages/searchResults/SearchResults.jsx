import React from "react";
import Header from "components/header/Header";
import { routes } from "consts";
import equal from "deep-equal";
import RepositoriesList from "components/repositories/list/ListContainer";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from "components/formElements/button/Button";
import style from "./style.scss";

class SearchResults extends React.Component {

    state = {
        searchCriteria: {
            q: "",
            sort: "stargazers_count",
            order: "desc",
            page: 1,
            per_page: 20
        }
    }

    componentDidMount() {
        const favoutites = this.props.match.params.favoutites;
        const encodedFavoutites = JSON.parse(atob(favoutites));
        let searchCriteria = { ...this.state.searchCriteria };

        searchCriteria.q = `${encodedFavoutites.desc}+language:${encodedFavoutites.lang}`;

        this.setState({ searchCriteria });
        this.props.onSearchTriggered({ criteria: searchCriteria });
    }

    onLoadMoreClick = () => {
        let searchCriteria = { ...this.state.searchCriteria };

        searchCriteria.page++;

        this.setState({ searchCriteria });
        this.props.onSearchMoreTriggered({ criteria: searchCriteria });
    }

    render() {
        const { isProcessing } = this.props;

        return (
            <div>
                <Header
                    title="Search Results"
                    route={ routes.MAIN }
                />
                { isProcessing && <LinearProgress /> }
                <RepositoriesList />
                { !isProcessing && 
                    <div className={ style.loadMoreWrapper }>
                        <Button
                            onClick={ this.onLoadMoreClick }
                        >
                            Load More
                        </Button>
                    </div>
                }
            </div>
        );
    }
};

export default SearchResults;